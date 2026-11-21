"use strict";

const POINTS_FOR_FIRST_CORRECT = 1000;
const QUESTION_START_DELAY_MS = 1500;
const ANSWER_NETWORK_GRACE_MS = 1200;
const RESULT_DISPLAY_MS = 3500;

const questionSets = {
    lakes: {
        title: "African Lakes",
        questions: [
            {
                question: "Which three countries share the shores of Lake Victoria?",
                answers: ["Kenya, Tanzania, and Uganda", "Kenya, Uganda, and Rwanda", "Tanzania, Malawi, and Zambia", "Uganda, Rwanda, and Burundi"],
                correctAnswer: "Kenya, Tanzania, and Uganda"
            },
            {
                question: "Which river begins its journey from Lake Victoria?",
                answers: ["White Nile", "Congo River", "Zambezi River", "Niger River"],
                correctAnswer: "White Nile"
            },
            {
                question: "Which African lake is also known as Lake Nyasa?",
                answers: ["Lake Malawi", "Lake Chad", "Lake Turkana", "Lake Albert"],
                correctAnswer: "Lake Malawi"
            },
            {
                question: "Which African lake is the largest by surface area?",
                answers: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
                correctAnswer: "Lake Victoria"
            },
            {
                question: "Which country is Lake Chad named after?",
                answers: ["Chad", "Niger", "Nigeria", "Cameroon"],
                correctAnswer: "Chad"
            }
        ],
        challengeQuestions: [
            {
                question: "What distinction does Lake Tanganyika hold in Africa?",
                answers: ["It is Africa's deepest lake", "It is Africa's highest lake", "It is Africa's saltiest lake", "It is Africa's smallest lake"],
                correctAnswer: "It is Africa's deepest lake"
            },
            {
                question: "Lake Tana, in Ethiopia, is a source of which river?",
                answers: ["Blue Nile", "Congo River", "Limpopo River", "Orange River"],
                correctAnswer: "Blue Nile"
            },
            {
                question: "Which lake is shared by Rwanda and the Democratic Republic of the Congo?",
                answers: ["Lake Kivu", "Lake Turkana", "Lake Volta", "Lake Nasser"],
                correctAnswer: "Lake Kivu"
            },
            {
                question: "Lake Kariba forms part of the border between which two countries?",
                answers: ["Zambia and Zimbabwe", "Kenya and Tanzania", "Malawi and Mozambique", "Uganda and Rwanda"],
                correctAnswer: "Zambia and Zimbabwe"
            },
            {
                question: "Lake Turkana is found mainly in which country?",
                answers: ["Kenya", "Ethiopia", "Sudan", "Somalia"],
                correctAnswer: "Kenya"
            }
        ]
    },
    places: {
        title: "African Places",
        questions: [
            {
                question: "The Great Pyramid of Giza is in which country?",
                answers: ["Egypt", "Sudan", "Libya", "Morocco"],
                correctAnswer: "Egypt"
            },
            {
                question: "The Serengeti National Park is primarily in which country?",
                answers: ["Tanzania", "Kenya", "Botswana", "Namibia"],
                correctAnswer: "Tanzania"
            },
            {
                question: "Victoria Falls lies on the border of Zambia and which country?",
                answers: ["Zimbabwe", "Malawi", "Angola", "Mozambique"],
                correctAnswer: "Zimbabwe"
            },
            {
                question: "The rock-hewn churches of Lalibela are in which country?",
                answers: ["Ethiopia", "Eritrea", "Kenya", "Uganda"],
                correctAnswer: "Ethiopia"
            },
            {
                question: "Timbuktu is a historic city in which country?",
                answers: ["Mali", "Ghana", "Senegal", "Niger"],
                correctAnswer: "Mali"
            }
        ],
        challengeQuestions: [
            {
                question: "Table Mountain overlooks which South African city?",
                answers: ["Cape Town", "Durban", "Pretoria", "Johannesburg"],
                correctAnswer: "Cape Town"
            },
            {
                question: "Which mountain range crosses Morocco, Algeria, and Tunisia?",
                answers: ["Atlas Mountains", "Drakensberg", "Rwenzori Mountains", "Ethiopian Highlands"],
                correctAnswer: "Atlas Mountains"
            },
            {
                question: "The Great Mosque of Djenné is in which country?",
                answers: ["Mali", "Chad", "Burkina Faso", "Niger"],
                correctAnswer: "Mali"
            },
            {
                question: "The Ngorongoro Conservation Area is in which country?",
                answers: ["Tanzania", "Uganda", "Zambia", "South Africa"],
                correctAnswer: "Tanzania"
            },
            {
                question: "The ruins of Great Zimbabwe are in which modern-day country?",
                answers: ["Zimbabwe", "Zambia", "Botswana", "Mozambique"],
                correctAnswer: "Zimbabwe"
            }
        ]
    },
    cities: {
        title: "African Cities",
        questions: [
            {
                question: "What is the capital of Ghana?",
                answers: ["Accra", "Kumasi", "Lagos", "Lomé"],
                correctAnswer: "Accra"
            },
            {
                question: "What is the capital of Egypt?",
                answers: ["Cairo", "Alexandria", "Khartoum", "Tripoli"],
                correctAnswer: "Cairo"
            },
            {
                question: "Addis Ababa is the capital of which country?",
                answers: ["Ethiopia", "Eritrea", "Somalia", "Sudan"],
                correctAnswer: "Ethiopia"
            },
            {
                question: "What is the capital of Rwanda?",
                answers: ["Kigali", "Bujumbura", "Kampala", "Goma"],
                correctAnswer: "Kigali"
            },
            {
                question: "Dakar is the capital of which country?",
                answers: ["Senegal", "Guinea", "The Gambia", "Mali"],
                correctAnswer: "Senegal"
            }
        ],
        challengeQuestions: [
            {
                question: "What is the capital of Kenya?",
                answers: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"],
                correctAnswer: "Nairobi"
            },
            {
                question: "Rabat is the capital of which country?",
                answers: ["Morocco", "Algeria", "Tunisia", "Mauritania"],
                correctAnswer: "Morocco"
            },
            {
                question: "What is the capital of Nigeria?",
                answers: ["Abuja", "Lagos", "Kano", "Ibadan"],
                correctAnswer: "Abuja"
            },
            {
                question: "Antananarivo is the capital of which island country?",
                answers: ["Madagascar", "Mauritius", "Seychelles", "Comoros"],
                correctAnswer: "Madagascar"
            },
            {
                question: "What is the capital of Zambia?",
                answers: ["Lusaka", "Harare", "Lilongwe", "Gaborone"],
                correctAnswer: "Lusaka"
            }
        ]
    },
    nature: {
        title: "African Nature",
        questions: [
            {
                question: "What is the largest land animal living in Africa?",
                answers: ["African elephant", "Giraffe", "White rhinoceros", "Hippopotamus"],
                correctAnswer: "African elephant"
            },
            {
                question: "Which African big cat is known as the world's fastest land animal?",
                answers: ["Cheetah", "Lion", "Leopard", "Caracal"],
                correctAnswer: "Cheetah"
            },
            {
                question: "Which desert covers much of North Africa?",
                answers: ["Sahara", "Kalahari", "Namib", "Gobi"],
                correctAnswer: "Sahara"
            },
            {
                question: "Which ecosystem is famous for the annual wildebeest migration in East Africa?",
                answers: ["Serengeti ecosystem", "Congo Basin", "Okavango Delta", "Sudd wetlands"],
                correctAnswer: "Serengeti ecosystem"
            },
            {
                question: "What is the name of the iconic African tree with a very thick trunk?",
                answers: ["Baobab", "Acacia", "Cedar", "Olive"],
                correctAnswer: "Baobab"
            }
        ],
        challengeQuestions: [
            {
                question: "What kind of animal is a Nile crocodile?",
                answers: ["A reptile", "An amphibian", "A mammal", "A fish"],
                correctAnswer: "A reptile"
            },
            {
                question: "Which flightless African bird is the world's largest bird?",
                answers: ["Ostrich", "Secretary bird", "Shoebill", "Kori bustard"],
                correctAnswer: "Ostrich"
            },
            {
                question: "Mountain gorillas live in Volcanoes National Park, in which country?",
                answers: ["Rwanda", "Kenya", "Senegal", "Namibia"],
                correctAnswer: "Rwanda"
            },
            {
                question: "Which African penguin species lives along the coasts of South Africa and Namibia?",
                answers: ["African penguin", "Emperor penguin", "Little penguin", "King penguin"],
                correctAnswer: "African penguin"
            },
            {
                question: "Which African river is famous for hippos and crocodiles and flows through Egypt?",
                answers: ["Nile River", "Niger River", "Zambezi River", "Orange River"],
                correctAnswer: "Nile River"
            }
        ]
    },
    people: {
        title: "African People",
        questions: [
            {
                question: "Who became South Africa's first democratically elected president in 1994?",
                answers: ["Nelson Mandela", "Desmond Tutu", "Thabo Mbeki", "Oliver Tambo"],
                correctAnswer: "Nelson Mandela"
            },
            {
                question: "Which Kenyan environmentalist founded the Green Belt Movement?",
                answers: ["Wangari Maathai", "Miriam Makeba", "Ellen Johnson Sirleaf", "Ama Ata Aidoo"],
                correctAnswer: "Wangari Maathai"
            },
            {
                question: "Which Nigerian author wrote the novel Things Fall Apart?",
                answers: ["Chinua Achebe", "Wole Soyinka", "Ben Okri", "Chimamanda Ngozi Adichie"],
                correctAnswer: "Chinua Achebe"
            },
            {
                question: "Which South African singer was known as Mama Africa?",
                answers: ["Miriam Makeba", "Brenda Fassie", "Yvonne Chaka Chaka", "Ladysmith Black Mambazo"],
                correctAnswer: "Miriam Makeba"
            },
            {
                question: "Fela Kuti, the Nigerian musician, helped pioneer which music genre?",
                answers: ["Afrobeat", "Highlife", "Mbalax", "Soukous"],
                correctAnswer: "Afrobeat"
            }
        ],
        challengeQuestions: [
            {
                question: "Which Nigerian playwright won the Nobel Prize in Literature in 1986?",
                answers: ["Wole Soyinka", "Chinua Achebe", "Ben Okri", "Buchi Emecheta"],
                correctAnswer: "Wole Soyinka"
            },
            {
                question: "Which Ghanaian diplomat served as UN Secretary-General from 1997 to 2006?",
                answers: ["Kofi Annan", "Kwame Nkrumah", "John Kufuor", "Jerry Rawlings"],
                correctAnswer: "Kofi Annan"
            },
            {
                question: "Which Egyptian novelist won the Nobel Prize in Literature in 1988?",
                answers: ["Naguib Mahfouz", "Taha Hussein", "Tawfiq al-Hakim", "Alaa Al Aswany"],
                correctAnswer: "Naguib Mahfouz"
            },
            {
                question: "Which Ghanaian queen mother led resistance during the War of the Golden Stool?",
                answers: ["Yaa Asantewaa", "Ama Ata Aidoo", "Efua Sutherland", "Nana Konadu"],
                correctAnswer: "Yaa Asantewaa"
            },
            {
                question: "Which South African archbishop chaired the Truth and Reconciliation Commission?",
                answers: ["Desmond Tutu", "Nelson Mandela", "Allan Boesak", "Albert Luthuli"],
                correctAnswer: "Desmond Tutu"
            }
        ]
    }
};

const gameTitleElement = document.querySelector("#game-title");
const coverPageElement = document.querySelector("#cover-page");
const gameContentElement = document.querySelector("#game-content");
const enterGameButton = document.querySelector("#enter-game");
const setupElement = document.querySelector("#setup");
const setupTitleElement = document.querySelector("#setup-title");
const setupForm = document.querySelector("#setup-form");
const gameOptionsElement = document.querySelector("#game-options");
const categoryField = document.querySelector("#category-field");
const categorySelect = document.querySelector("#category");
const difficultySelect = document.querySelector("#difficulty");
const questionTimeSelect = document.querySelector("#question-time");
const roundCountSelect = document.querySelector("#round-count");
const playerNamesInput = document.querySelector("#player-names");
const setupButton = document.querySelector("#setup-button");
const setupErrorElement = document.querySelector("#setup-error");
const lobbyElement = document.querySelector("#lobby");
const lobbyTitleElement = document.querySelector("#lobby-title");
const lobbyStatusElement = document.querySelector("#lobby-status");
const inviteControlsElement = document.querySelector("#invite-controls");
const inviteLinkInput = document.querySelector("#invite-link");
const copyInviteButton = document.querySelector("#copy-invite");
const shareInviteButton = document.querySelector("#share-invite");
const connectionErrorElement = document.querySelector("#connection-error");
const startGameButton = document.querySelector("#start-game");
const quizElement = document.querySelector("#quiz");
const resultsElement = document.querySelector("#results");
const progressElement = document.querySelector("#progress");
const scoreElement = document.querySelector("#score");
const timerElement = document.querySelector("#timer");
const timerProgressElement = document.querySelector("#timer-progress");
const timerProgressFillElement = document.querySelector("#timer-progress-fill");
const questionElement = document.querySelector("#question");
const answersElement = document.querySelector("#answers");
const hintButton = document.querySelector("#hint-button");
const hintStatusElement = document.querySelector("#hint-status");
const feedbackElement = document.querySelector("#feedback");
const winnerElement = document.querySelector("#winner");
const standingsElement = document.querySelector("#standings");
const restartButton = document.querySelector("#restart-button");

const invitePeerId = new URLSearchParams(window.location.search).get("join");
let peer;
let connection;
let role;
let localPlayerId;
let players = [];
let questions = questionSets[categorySelect.value].questions;
let gameQuestions = [];
let gameSettings = {
    difficulty: difficultySelect.value,
    questionTimeSeconds: Number(questionTimeSelect.value),
    roundCount: Number(roundCountSelect.value)
};
let currentQuestionIndex = 0;
let questionStartAt = 0;
let questionDeadline = 0;
let clockOffset = 0;
let localAnswerSubmitted = false;
let questionAnswered = false;
let fiftyFiftyUsed = false;
let answers = new Map();
let awardedPoints = new Map();
let timerIntervalId;
let startTimeoutId;
let deadlineTimeoutId;
let advanceTimeoutId;

function clearGameTimers() {
    window.clearInterval(timerIntervalId);
    window.clearTimeout(startTimeoutId);
    window.clearTimeout(deadlineTimeoutId);
    window.clearTimeout(advanceTimeoutId);
    timerIntervalId = undefined;
    startTimeoutId = undefined;
    deadlineTimeoutId = undefined;
    advanceTimeoutId = undefined;
}

function sendToGuest(message) {
    if (!connection || !connection.open) {
        connectionErrorElement.textContent = "The connection to the other player was lost.";
        return false;
    }

    connection.send(message);
    return true;
}

function displayScore() {
    scoreElement.textContent = `Scores — ${players.map((player) => `${player.name}: ${player.score}`).join(" · ")}`;
}

function buildGameQuestions(category, settings) {
    const bank = questionSets[category];
    const easyQuestions = bank.questions;
    const challengeQuestions = bank.challengeQuestions;
    let orderedQuestions;

    if (settings.difficulty === "easy") {
        orderedQuestions = [...easyQuestions, ...challengeQuestions];
    } else if (settings.difficulty === "challenge") {
        orderedQuestions = [...challengeQuestions, ...easyQuestions];
    } else {
        orderedQuestions = easyQuestions.flatMap((question, index) => [
            question,
            challengeQuestions[index]
        ]);
    }

    return orderedQuestions.slice(0, settings.roundCount);
}

function describeSettings(settings) {
    const difficultyNames = {
        easy: "Easy start",
        mixed: "Balanced mix",
        challenge: "Challenge first"
    };
    return `${difficultyNames[settings.difficulty]}, ${settings.questionTimeSeconds}s per question, ` +
        `${settings.roundCount} questions`;
}

function showLobby() {
    setupElement.hidden = true;
    quizElement.hidden = true;
    resultsElement.hidden = true;
    lobbyElement.hidden = false;
}

function showConnectionError(message) {
    connectionErrorElement.textContent = message;
    setupErrorElement.textContent = message;
}

function connectToHost(hostId, playerName) {
    role = "guest";
    localPlayerId = "guest";
    lobbyTitleElement.textContent = "Joining game";
    lobbyStatusElement.textContent = "Connecting to the host...";
    inviteControlsElement.hidden = true;
    startGameButton.hidden = true;
    showLobby();

    try {
        if (typeof window.Peer !== "function") {
            throw new Error("The connection library did not load. Check your internet connection and reload.");
        }
        peer = new window.Peer();
        peer.on("open", () => {
            connection = peer.connect(hostId, { reliable: true });
            connection.on("open", () => {
                lobbyStatusElement.textContent = "Connected. Synchronizing the game clock...";
                connection.send({ type: "clock-ping", clientSentAt: Date.now() });
            });
            connection.on("data", handleHostMessage);
            connection.on("close", handleConnectionClose);
            connection.on("error", (error) => {
                showConnectionError(`Connection problem: ${error.message}`);
            });
        });
        peer.on("error", (error) => {
            showConnectionError(`Could not join the game: ${error.message}`);
        });
    } catch (error) {
        showConnectionError(error.message);
    }

    playerNamesInput.value = playerName;
}

function createGame(playerName, category, settings) {
    role = "host";
    localPlayerId = "host";
    questions = questionSets[category].questions;
    gameSettings = settings;
    gameQuestions = buildGameQuestions(category, gameSettings);
    players = [{ id: "host", name: playerName, score: 0 }];
    currentQuestionIndex = 0;
    lobbyTitleElement.textContent = "Invite a player";
    lobbyStatusElement.textContent = "Creating a game room...";
    connectionErrorElement.textContent = "";
    inviteControlsElement.hidden = true;
    startGameButton.disabled = true;
    startGameButton.hidden = false;
    showLobby();

    try {
        if (typeof window.Peer !== "function") {
            throw new Error("The connection library did not load. Check your internet connection and reload.");
        }
        peer = new window.Peer();
        peer.on("open", (peerId) => {
            const inviteUrl = new URL(window.location.href);
            inviteUrl.searchParams.set("join", peerId);
            inviteLinkInput.value = inviteUrl.href;
            inviteControlsElement.hidden = false;
            lobbyStatusElement.textContent =
                `Room is ready (${describeSettings(gameSettings)}). Share the link and wait for the other player.`;
        });
        peer.on("connection", (incomingConnection) => {
            if (connection) {
                incomingConnection.close();
                return;
            }
            connection = incomingConnection;
            connection.on("data", handleGuestMessage);
            connection.on("close", handleConnectionClose);
            connection.on("error", (error) => {
                showConnectionError(`Connection problem: ${error.message}`);
            });
        });
        peer.on("error", (error) => {
            showConnectionError(`Could not create a game: ${error.message}`);
        });
    } catch (error) {
        showConnectionError(error.message);
    }
}

function handleGuestMessage(message) {
    if (!message || typeof message.type !== "string") {
        return;
    }

    if (message.type === "clock-ping") {
        sendToGuest({ type: "clock-pong", clientSentAt: message.clientSentAt, hostTime: Date.now() });
        return;
    }

    if (message.type === "hello") {
        if (players.length !== 1 || typeof message.name !== "string" || !message.name.trim()) {
            sendToGuest({ type: "error", message: "This room already has a player." });
            return;
        }
        players.push({ id: "guest", name: message.name.trim(), score: 0 });
        lobbyStatusElement.textContent = `${players[1].name} joined. You're ready to start!`;
        startGameButton.disabled = false;
        sendToGuest({
            type: "lobby",
            category: categorySelect.value,
            settings: gameSettings,
            players: players.map((player) => ({ id: player.id, name: player.name, score: player.score }))
        });
        return;
    }

    if (message.type === "answer") {
        recordAnswer("guest", message);
    }
}

function handleHostMessage(message) {
    if (!message || typeof message.type !== "string") {
        return;
    }

    if (message.type === "clock-pong") {
        const receivedAt = Date.now();
        clockOffset = message.hostTime - (message.clientSentAt + receivedAt) / 2;
        connection.send({ type: "hello", name: playerNamesInput.value.trim() });
        return;
    }

    if (message.type === "error") {
        showConnectionError(message.message);
        return;
    }

    if (message.type === "lobby") {
        categorySelect.value = message.category;
        questions = questionSets[message.category].questions;
        gameSettings = message.settings;
        gameQuestions = buildGameQuestions(message.category, gameSettings);
        gameTitleElement.textContent = `${questionSets[message.category].title} Quiz`;
        players = message.players;
        lobbyTitleElement.textContent = "You're in!";
        lobbyStatusElement.textContent =
            `Connected with ${players[0].name}. ${describeSettings(gameSettings)}. Waiting for the host to start.`;
        return;
    }

    if (message.type === "question") {
        categorySelect.value = message.category;
        players = message.players;
        questions = questionSets[message.category].questions;
        gameSettings = message.settings;
        gameQuestions = buildGameQuestions(message.category, gameSettings);
        displayQuestion(message);
        return;
    }

    if (message.type === "question-update") {
        if (message.index === currentQuestionIndex && !questionAnswered) {
            displayQuestionUpdate(message);
        }
        return;
    }

    if (message.type === "question-result") {
        players = message.players;
        displayQuestionResult(message);
        return;
    }

    if (message.type === "game-over") {
        players = message.players;
        showResults();
    }
}

function handleConnectionClose() {
    const message = "The other player disconnected. The host can create a new invite to play again.";
    connectionErrorElement.textContent = message;
    if (!quizElement.hidden) {
        feedbackElement.textContent = message;
    }
    startGameButton.disabled = true;
}

function startQuestion(index) {
    currentQuestionIndex = index;
    questionAnswered = false;
    localAnswerSubmitted = false;
    answers = new Map();
    awardedPoints = new Map();
    questionStartAt = Date.now() + QUESTION_START_DELAY_MS;
    questionDeadline = questionStartAt + gameSettings.questionTimeSeconds * 1000;

    const message = {
        type: "question",
        index,
        category: categorySelect.value,
        settings: gameSettings,
        players: players.map((player) => ({ id: player.id, name: player.name, score: player.score })),
        startAt: questionStartAt,
        deadline: questionDeadline
    };
    displayQuestion(message);
    sendToGuest(message);
}

function displayQuestion(message) {
    clearGameTimers();
    currentQuestionIndex = message.index;
    questionStartAt = message.startAt;
    questionDeadline = message.deadline;
    localAnswerSubmitted = false;
    questionAnswered = false;
    answers.clear();
    players = message.players;
    const question = gameQuestions[currentQuestionIndex];

    gameTitleElement.textContent = `${questionSets[categorySelect.value].title} Quiz`;
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${gameQuestions.length}`;
    displayScore();
    questionElement.textContent = question.question;
    feedbackElement.textContent = "Get ready...";
    feedbackElement.classList.remove("round-result", "round-result-winner");
    hintButton.hidden = fiftyFiftyUsed;
    hintButton.disabled = true;
    hintStatusElement.textContent = fiftyFiftyUsed
        ? "Your 50/50 hint has already been used."
        : "One 50/50 hint is available this game.";
    answersElement.replaceChildren();

    question.answers.forEach((answer) => {
        const answerButton = document.createElement("button");
        answerButton.className = "answer-button";
        answerButton.type = "button";
        answerButton.textContent = answer;
        answerButton.disabled = true;
        answerButton.addEventListener("click", () => submitAnswer(answer));
        answersElement.append(answerButton);
    });

    setupElement.hidden = true;
    lobbyElement.hidden = true;
    resultsElement.hidden = true;
    quizElement.hidden = false;

    const localStartAt = questionStartAt - clockOffset;
    startTimeoutId = window.setTimeout(activateQuestion, Math.max(0, localStartAt - Date.now()));
    timerIntervalId = window.setInterval(updateQuestionTimer, 100);
    updateQuestionTimer();
}

function activateQuestion() {
    if (questionAnswered || localAnswerSubmitted) {
        return;
    }
    answersElement.querySelectorAll("button").forEach((button) => {
        button.disabled = false;
    });
    hintButton.disabled = fiftyFiftyUsed;
    feedbackElement.textContent = "Choose your answer!";
}

function updateQuestionTimer() {
    const hostNow = Date.now() + clockOffset;
    const remainingMs = Math.max(0, questionDeadline - Math.max(hostNow, questionStartAt));
    const questionDurationMs = questionDeadline - questionStartAt;
    const secondsRemaining = Math.ceil(remainingMs / 1000);
    const timeFraction = questionDurationMs > 0 ? remainingMs / questionDurationMs : 0;
    timerElement.textContent = `${secondsRemaining}s`;
    timerElement.classList.toggle("low-time", secondsRemaining <= 5);
    timerProgressFillElement.style.width = `${timeFraction * 100}%`;
    timerProgressFillElement.classList.toggle("low-time", secondsRemaining <= 5);
    timerProgressElement.setAttribute("aria-valuemax", String(gameSettings.questionTimeSeconds));
    timerProgressElement.setAttribute("aria-valuenow", String(secondsRemaining));

    if (hostNow >= questionStartAt && !localAnswerSubmitted) {
        activateQuestion();
    }

    if (hostNow >= questionDeadline && !localAnswerSubmitted) {
        localAnswerSubmitted = true;
        answersElement.querySelectorAll("button").forEach((button) => {
            button.disabled = true;
        });
        hintButton.disabled = true;
        feedbackElement.textContent = "Time's up. Waiting for the result...";
    }

    if (role === "host" && hostNow >= questionDeadline && deadlineTimeoutId === undefined) {
        deadlineTimeoutId = window.setTimeout(finishQuestion, ANSWER_NETWORK_GRACE_MS);
    }
}

function submitAnswer(answer) {
    if (localAnswerSubmitted || questionAnswered || Date.now() + clockOffset >= questionDeadline) {
        return;
    }

    localAnswerSubmitted = true;
    answersElement.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
        if (button.textContent === answer) {
            button.classList.add("selected");
        }
    });
    hintButton.disabled = true;

    const message = {
        type: "answer",
        index: currentQuestionIndex,
        answer,
        answeredAt: Date.now() + clockOffset
    };

    if (role === "host") {
        recordAnswer(localPlayerId, message);
    } else if (connection && connection.open) {
        connection.send(message);
        feedbackElement.textContent = "Answer submitted. Waiting for the result...";
    } else {
        feedbackElement.textContent = "Your answer could not be sent. The connection was lost.";
    }
}

function useFiftyFiftyHint() {
    if (fiftyFiftyUsed || localAnswerSubmitted || questionAnswered ||
        Date.now() + clockOffset < questionStartAt ||
        Date.now() + clockOffset >= questionDeadline) {
        return;
    }

    const question = gameQuestions[currentQuestionIndex];
    const incorrectButtons = [...answersElement.querySelectorAll("button")]
        .filter((button) => button.textContent !== question.correctAnswer);

    for (let count = 0; count < 2; count += 1) {
        const randomIndex = Math.floor(Math.random() * incorrectButtons.length);
        incorrectButtons.splice(randomIndex, 1)[0].remove();
    }

    fiftyFiftyUsed = true;
    hintButton.hidden = true;
    hintButton.disabled = true;
    hintStatusElement.textContent = "Hint used! Two incorrect choices have been removed.";
}

function recordAnswer(playerId, message) {
    if (role !== "host" || questionAnswered || message.index !== currentQuestionIndex ||
        answers.has(playerId) || typeof message.answer !== "string") {
        return;
    }

    const answeredAt = Number(message.answeredAt);
    const receivedAt = Date.now();
    if (!Number.isFinite(answeredAt) || answeredAt < questionStartAt ||
        answeredAt > questionDeadline || receivedAt > questionDeadline + ANSWER_NETWORK_GRACE_MS) {
        return;
    }

    answers.set(playerId, {
        playerId,
        answer: message.answer,
        answeredAt,
        correct: message.answer === gameQuestions[currentQuestionIndex].correctAnswer,
        points: 0
    });

    if (answers.size === players.length) {
        finishQuestion();
    } else {
        updateQuestionAwards();
        const update = {
            type: "question-update",
            index: currentQuestionIndex,
            firstCorrectPlayerId: getFirstCorrectAnswer()?.playerId ?? null,
            answers: [...answers.values()],
            players: players.map((player) => ({ id: player.id, name: player.name, score: player.score }))
        };
        displayQuestionUpdate(update);
        sendToGuest(update);
    }
}

function getFirstCorrectAnswer() {
    return [...answers.values()]
        .filter((answer) => answer.correct)
        .sort((first, second) => first.answeredAt - second.answeredAt)[0];
}

function updateQuestionAwards() {
    const correctAnswers = [...answers.values()]
        .filter((answer) => answer.correct)
        .sort((first, second) => first.answeredAt - second.answeredAt);
    const currentAwards = new Map();

    correctAnswers.forEach((answer, index) => {
        const points = index === 0 ? POINTS_FOR_FIRST_CORRECT : 0;
        currentAwards.set(answer.playerId, points);
        answer.points = points;
    });

    players.forEach((player) => {
        const previousPoints = awardedPoints.get(player.id) || 0;
        const currentPoints = currentAwards.get(player.id) || 0;
        player.score += currentPoints - previousPoints;
    });
    awardedPoints = currentAwards;
}

function displayQuestionUpdate(message) {
    players = message.players;
    displayScore();

    if (!message.firstCorrectPlayerId) {
        return;
    }

    const firstCorrect = players.find((player) => player.id === message.firstCorrectPlayerId);
    if (!firstCorrect) {
        return;
    }

    const roundPoints = players.map((player) => {
        const answer = message.answers.find((result) => result.playerId === player.id);
        return `${player.name}: +${answer?.points || 0} points`;
    });
    const unansweredPlayer = players.find((player) =>
        player.id !== firstCorrect.id &&
        !message.answers.some((answer) => answer.playerId === player.id)
    );

    feedbackElement.classList.add("round-result", "round-result-winner");
    feedbackElement.textContent =
        `🎉 Congrats, ${firstCorrect.name}! First correct answer — 1,000 points! ` +
        `${roundPoints.join(" · ")}.` +
        (unansweredPlayer
            ? ` ${unansweredPlayer.name} can still answer, but the 1,000 points have already been claimed.`
            : "");
}

function finishQuestion() {
    if (role !== "host" || questionAnswered) {
        return;
    }

    questionAnswered = true;
    clearGameTimers();
    updateQuestionAwards();

    const message = {
        type: "question-result",
        index: currentQuestionIndex,
        correctAnswer: gameQuestions[currentQuestionIndex].correctAnswer,
        answers: [...answers.values()],
        players: players.map((player) => ({ id: player.id, name: player.name, score: player.score }))
    };
    displayQuestionResult(message);
    sendToGuest(message);
    advanceTimeoutId = window.setTimeout(advanceQuestion, RESULT_DISPLAY_MS);
}

function displayQuestionResult(message) {
    questionAnswered = true;
    clearGameTimers();
    hintButton.disabled = true;
    players = message.players;
    displayScore();
    answersElement.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
        if (button.textContent === message.correctAnswer) {
            button.classList.add("correct");
        }
    });

    const firstCorrect = message.answers
        .filter((answer) => answer.correct)
        .sort((first, second) => first.answeredAt - second.answeredAt)[0];
    const playerResults = players.map((player) => {
        const answer = message.answers.find((result) => result.playerId === player.id);
        if (!answer) {
            return `${player.name}: +0 points (no answer)`;
        }
        return answer.correct
            ? `${player.name}: +${answer.points} points`
            : `${player.name}: +0 points (incorrect)`;
    });

    feedbackElement.classList.add("round-result");
    if (firstCorrect) {
        const winner = players.find((player) => player.id === firstCorrect.playerId);
        feedbackElement.classList.add("round-result-winner");
        feedbackElement.textContent =
            `🎉 Congrats, ${winner.name}! First correct answer. ${message.correctAnswer} was correct. ` +
            `${playerResults.join(" · ")}.`;
    } else {
        feedbackElement.textContent =
            `No correct answers this round. The answer was ${message.correctAnswer}. ` +
            `${playerResults.join(" · ")}.`;
    }
}

function advanceQuestion() {
    if (currentQuestionIndex + 1 >= gameQuestions.length) {
        const message = {
            type: "game-over",
            players: players.map((player) => ({ id: player.id, name: player.name, score: player.score }))
        };
        sendToGuest(message);
        showResults();
        return;
    }

    startQuestion(currentQuestionIndex + 1);
}

function showResults() {
    clearGameTimers();
    quizElement.hidden = true;
    lobbyElement.hidden = true;
    resultsElement.hidden = false;

    const highestScore = Math.max(...players.map((player) => player.score));
    const winners = players.filter((player) => player.score === highestScore);
    winnerElement.textContent = winners.length === 1
        ? `${winners[0].name} wins!`
        : `It's a tie between ${winners.map((player) => player.name).join(" and ")}!`;

    standingsElement.replaceChildren();
    [...players]
        .sort((first, second) => second.score - first.score)
        .forEach((player) => {
            const standing = document.createElement("li");
            standing.textContent = `${player.name}: ${player.score} points`;
            standingsElement.append(standing);
        });
    restartButton.focus();
}

function submitSetup(event) {
    event.preventDefault();
    const playerName = playerNamesInput.value.trim();
    if (!playerName) {
        setupErrorElement.textContent = "Enter your name to continue.";
        return;
    }

    setupErrorElement.textContent = "";
    if (invitePeerId) {
        connectToHost(invitePeerId, playerName);
    } else {
        createGame(playerName, categorySelect.value, {
            difficulty: difficultySelect.value,
            questionTimeSeconds: Number(questionTimeSelect.value),
            roundCount: Number(roundCountSelect.value)
        });
    }
}

async function copyInvite() {
    try {
        await navigator.clipboard.writeText(inviteLinkInput.value);
        lobbyStatusElement.textContent = "Invite link copied. Send it to the other player.";
    } catch (error) {
        showConnectionError(`Couldn't copy the invite link: ${error.message}`);
    }
}

async function shareInvite() {
    if (!navigator.share) {
        showConnectionError("Link sharing isn't supported here. Use Copy link instead.");
        return;
    }

    try {
        await navigator.share({
            title: "Join my quiz game",
            text: "Join me for a live quiz!",
            url: inviteLinkInput.value
        });
    } catch (error) {
        if (error.name !== "AbortError") {
            showConnectionError(`Couldn't share the invite link: ${error.message}`);
        }
    }
}

function startGame() {
    if (role !== "host" || players.length !== 2 || !connection || !connection.open) {
        return;
    }
    startGameButton.disabled = true;
    gameTitleElement.textContent = `${questionSets[categorySelect.value].title} Quiz`;
    startQuestion(0);
}

function newGame() {
    clearGameTimers();
    if (connection) {
        connection.close();
    }
    if (peer) {
        peer.destroy();
    }
    window.history.replaceState({}, "", window.location.pathname);
    window.location.reload();
}

if (invitePeerId) {
    setupTitleElement.textContent = "Join your friend's game";
    categoryField.hidden = true;
    categorySelect.disabled = true;
    gameOptionsElement.hidden = true;
    setupButton.textContent = "Join game";
}

enterGameButton.addEventListener("click", () => {
    coverPageElement.hidden = true;
    gameContentElement.hidden = false;
    if (invitePeerId) {
        playerNamesInput.focus();
    } else {
        categorySelect.focus();
    }
});

setupForm.addEventListener("submit", submitSetup);
hintButton.addEventListener("click", useFiftyFiftyHint);
copyInviteButton.addEventListener("click", copyInvite);
shareInviteButton.addEventListener("click", shareInvite);
startGameButton.addEventListener("click", startGame);
restartButton.addEventListener("click", newGame);
