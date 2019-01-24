var qna = {
    one: {
        question: "What was Disney's first animated film?",
        answer: "Snow White and the Seven Dwarfs",
        incorrect: ["Cinderella", "Sleeping Beauty", "Lion King"],
    },
    two: {
        question: "When was The Little Mermaid released?",
        answer: "1989",
        incorrect: ["1942", "1950", "1973"],
    },
    three: {
        question: "Which of these films was more recently released?",
        answer: "Tangled",
        incorrect: ["The Princess and the Frog", "Tarzan", "Mulan"],
    },
    four: {
        question: "Who is the villian in the film Sleeping Beauty?",
        answer: "Maleficent",
        incorrect: ["Ursula", "Scar", "Cruella de Vil"],
    },
    five: {
        question: "What is the name of the snowman in the film Frozen?",
        answer: "Olaf",
        incorrect: ["Bambi", "Sven", "Heihei"],
    }
}

console.log(qna.one.question);
console.log(qna.one.answer);
console.log(qna.three.incorrect[2]);