const TeleBot = require('telebot');
const bot = new TeleBot('390855657:AAFn4ODwePzjEYNGb3oBCGKe25hf0E3Z9J0');

const will_attend_message = 'Погнали 👌';
let submitButton = bot.keyboard([[will_attend_message]], {resize: true});

const owner = '139310329';

bot.on('text', msg => {
    if (msg.text === will_attend_message) {
        bot.sendMessage(owner, `Учасник: @${msg.from.username ? msg.from.username : msg.from.first_name + ' ' + msg.from.last_name}`);
        bot.sendMessage(msg.from.id, 'Отлично! Скоро мы отправим тебе время начала баттла. Будь внимателен и не пропусти сообщение ✌');
    }

    return;
});

bot.on(['/start'], msg => {
    return bot.sendMessage(msg.from.id, 'Жми кнопку, если хочешь участвовать!', {markup: submitButton});
});

bot.start();