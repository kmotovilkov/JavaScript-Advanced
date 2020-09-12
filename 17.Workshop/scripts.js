;(function game() {

    const gameStart = document.querySelector('#game-start');
    const gameArea = document.querySelector('#game-area');
    const gameOver = document.querySelector('#game-over');
    const gameScoreValue = document.querySelector('#score-value');
    const wizard = document.getElementById('wizard');


    function createGameplay() {
        return {
            loopId: null,
            nextRenderQ: [],
            lastFireBallTimeStamp: 0,
            lastCloudTimestamp: 0,
            lastBugTimestamp: 0
        };
    }

    let gameplay;
    const pressedKeys = new Set();

    const config = {
        speed: 2,
        wizardMovingMultiplier: 4,
        fireBallMovingMultiplier: 5,
        fireInterval: 500,
        cloudSpanInterval: 3000,
        bugSpanInterval: 1000,
        bugKillScore: 200
    };


    const utils = {
        pxToNumber(val) {
            return +val.replace('px', '');
        },
        numberToPx(val) {
            return `${val}px`;
        },
        randomNumberBetween(min, max) {
            return Math.floor(Math.random() * max) + min;
        },

        hasCollison(el1, el2) {
            const el1Rect = el1.getBoundingClientRect();
            const el2Rect = el2.getBoundingClientRect();
            return !(
                el1Rect.top > el2Rect.bottom ||
                el1Rect.bottom < el2Rect.top ||
                el1Rect.right < el2Rect.left ||
                el1Rect.left > el2Rect.right
            );
        }

    };


    const scene = {
        get fireBalls() {
            return Array.from(document.querySelectorAll('.fire-ball'));
        },

        get clouds() {
            return Array.from(document.querySelectorAll('.cloud'));
        },
        get bugs() {
            return Array.from(document.querySelectorAll('.bug'));
        }

    };


    const wizardCoordinates = {
        wizard,
        set x(newX) {
            if (newX < 0) {
                newX = 0;
            } else if (newX + wizard.offsetWidth >= gameArea.offsetWidth) {
                newX = gameArea.offsetWidth - wizard.offsetWidth;
            }
            this.wizard.style.left = utils.numberToPx(newX);
        },
        get x() {
            return utils.pxToNumber(this.wizard.style.left);
        },
        set y(newY) {
            if (newY < 0) {
                newY = 0;
            } else if (newY + wizard.offsetHeight >= gameArea.offsetHeight) {
                newY = gameArea.offsetHeight - wizard.offsetHeight;
            }
            this.wizard.style.top = utils.numberToPx(newY);
        },
        get y() {
            return utils.pxToNumber(this.wizard.style.top);
        }
    };


    gameStart.addEventListener('click',
        function onGameStart() {
            gameStart.classList.add('hide');
            init();
        });

    function init() {

        gameplay = createGameplay()
        gameScoreValue.innerText = 0;
        wizardCoordinates.x = 200;
        wizardCoordinates.y = 200;
        gameArea.appendChild(wizard);
        wizard.classList.remove('hide');
        gameOver.classList.add('hide');
        gameLoop(0);

    }

    function gameOverEnd() {
        window.cancelAnimationFrame(gameplay.loopId);
        gameOver.classList.remove('hide');
        gameStart.classList.remove('hide');

    }

    function addGameElemmentFactory(className) {
        return function addElement(x, y) {
            const element = document.createElement('div');
            element.classList.add(className);
            element.style.left = utils.numberToPx(x);
            element.style.top = utils.numberToPx(y);
            gameArea.appendChild(element);
        }
    }

    const addFireBall = addGameElemmentFactory('fire-ball');
    const addCloud = addGameElemmentFactory('cloud');
    const addBug = addGameElemmentFactory('bug');


    const pressedKeyActionMap = {
        ArrowUp() {
            wizardCoordinates.y -= config.speed * config.wizardMovingMultiplier;
        },
        ArrowDown() {
            wizardCoordinates.y += config.speed * config.wizardMovingMultiplier;
        },
        ArrowLeft() {
            wizardCoordinates.x -= config.speed * config.wizardMovingMultiplier;
        },
        ArrowRight() {
            wizardCoordinates.x += config.speed * config.wizardMovingMultiplier;
        },

        Space(timestamp) {
            if (wizard.classList.contains('wizard-fire') ||
                timestamp - gameplay.lastFireBallTimeStamp < config.fireInterval) {
                return;
            }

            addFireBall(wizardCoordinates.x + 80, wizardCoordinates.y + 30);
            gameplay.lastFireBallTimeStamp = timestamp;
            wizard.classList.add('wizard-fire');
            gameplay.nextRenderQ = gameplay.nextRenderQ.concat(function clearWizardFire() {

                if (pressedKeys.has('Space')) {
                    return false;
                }
                wizard.classList.remove('wizard-fire');
                return true;
            });
        }
    };


    function processGameElementFactory(
        addFunction,
        elementWidth,
        gamePlayTimestampName,
        sceneName,
        configName,
        additionalElementProcessor) {
        return function (timestamp) {
            if (timestamp - gameplay[gamePlayTimestampName] > config[configName]) {
                const x = gameArea.offsetWidth + elementWidth;
                const y = utils.randomNumberBetween(0, gameArea.offsetHeight - elementWidth);

                addFunction(x, y);
                gameplay[gamePlayTimestampName] = timestamp;

            }
            scene[sceneName].forEach(el => {
                const newX = utils.pxToNumber(el.style.left) - config.speed;
                if (additionalElementProcessor && additionalElementProcessor(el)) {
                    return;
                }
                if (newX + 200 < 0) {
                    el.remove();
                }
                el.style.left = utils.numberToPx(newX);
            });
        }
    }


    const processClouds = processGameElementFactory
    (addCloud, 200, 'lastCloudTimestamp', 'clouds', 'cloudSpanInterval');

    function bugElementProcessor(bugElement) {
        const fireball = scene.fireBalls.find(fe => utils.hasCollison(fe, bugElement));
        if (fireball) {
            fireball.remove();
            bugElement.remove();
            gameScoreValue.innerText = config.bugKillScore + +gameScoreValue.innerText;
            return true;
        }
        if (utils.hasCollison(bugElement, wizard)) {
            gameOverEnd();
            return true;
        }
        return false;
    }

    const processBugs = processGameElementFactory(addBug, 60, 'lastBugTimestamp',
        'bugs', 'bugSpanInterval', bugElementProcessor)


    function processFireBall() {
        scene.fireBalls.forEach(fireBall => {
            const newX = (config.speed) * config.fireBallMovingMultiplier + utils.pxToNumber(fireBall.style.left);
            if (newX + fireBall.offsetWidth >= gameArea.offsetWidth) {
                fireBall.remove();
                return;
            }
            fireBall.style.left = utils.numberToPx(newX);
        });
    }

    function processNextRenderQ() {
        gameplay.nextRenderQ = gameplay.nextRenderQ.reduce((acc, currentFunc) => {
            if (currentFunc()) {
                return acc;
            }
            return acc.concat(currentFunc);
        }, []);
    }

    function processPressedKeys(timestamp) {
        pressedKeys.forEach(pressedKey => {
            const handler = pressedKeyActionMap[pressedKey];
            if (handler) {
                handler(timestamp);
            }

        });
    }

    function gameLoop(timestamp) {
        gameplay.loopId = window.requestAnimationFrame(gameLoop);
        processPressedKeys(timestamp);
        applyGravity(timestamp);
        processFireBall(timestamp);
        processNextRenderQ(timestamp);
        processClouds(timestamp);
        processBugs(timestamp);

        gameScoreValue.innerText++;
    }

    function applyGravity() {
        const isInAir = wizardCoordinates.y !== gameArea.offsetHeight;
        if (isInAir) {
            wizardCoordinates.y += config.speed;
        }
    }


    document.addEventListener('keydown', function onKeyDown(e) {


        pressedKeys.add(e.code);


    });
    document.addEventListener('keyup', function onKeyUp(e) {

        pressedKeys.delete(e.code);
    });


}());


