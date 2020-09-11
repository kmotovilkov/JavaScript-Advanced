;(function game() {

    const gameStart = document.querySelector('#game-start');
    const gameArea = document.querySelector('#game-area');
    const gameOver = document.querySelector('#game-over');
    const gameScoreValue = document.querySelector('#score-value');
    const wizard = document.getElementById('wizard');

    function createGameplay() {
        return {
            loopId: null,
            nextRenderQ: []
        };
    }

    let gameplay;
    const pressedKeys = new Set();
    const config = {
        speed: 2,
        wizardMovingMultiplier: 4
    };
    const utils = {
        pxToNumber(val) {
            return +val.replace('px', '');
        },
        numberToPx(val) {
            return `${val}px`;
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

    // game start listener
    gameStart.addEventListener('click',
        function onGameStart() {
            gameStart.classList.add('hide');
            init();
        });

    function init() {

        gameplay = createGameplay()
        gameScoreValue.innerText = 0;
        // wizard
        wizardCoordinates.x = 200;
        wizardCoordinates.y = 200;
        gameArea.appendChild(wizard);
        wizard.classList.remove('hide');

        // game infinite loop
        gameLoop();

    }


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

        Space() {
            if (wizard.classList.contains('wizard-fire')) {
                return;
            }
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

    function processNextRenderQ() {
        gameplay.nextRenderQ.reduce((acc, currentFunc) => {
            if (currentFunc()) {
                return acc;
            }
            return acc.concat(currentFunc);
        }, []);
    }

    function processPressedKeys() {
        pressedKeys.forEach(pressedKey => {
            const handler = pressedKeyActionMap[pressedKey];
            if (handler) {
                handler();
            }

        });
    }

    function gameLoop() {
        gameplay.loopId = window.requestAnimationFrame(gameLoop);

        // register user input
        processPressedKeys();

        //apply gravitation
        applyGravity();

        // apply score
        gameScoreValue.innerText++;
        // back space
        processNextRenderQ();

    }

    function applyGravity() {
        const isInAir = wizardCoordinates.y !== gameArea.offsetHeight;
        if (isInAir) {
            wizardCoordinates.y += config.speed;
        }
    }

// global key listeners
    document.addEventListener('keydown', function onKeyDown(e) {

        //key handlers
        pressedKeys.add(e.code);


    });
    document.addEventListener('keyup', function onKeyUp(e) {
        //key handlers
        pressedKeys.delete(e.code);
    });


}());


