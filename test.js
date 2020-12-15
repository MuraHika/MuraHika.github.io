describe("Тестирование функции регистрации", function() {

    describe("Ввести корректные данные", function() {

        function makeTest(user_name, e_mail, password) {
            var expected = 'Пользователь зарегистрирован!';
            it("При введении данных пользователя user_name: " + user_name + " e_mail: " + e_mail + ", password: " + password + ", результат: " + expected, function() {
                assert.equal(sign_up(user_name, e_mail, password), expected);
            });
        }
        makeTest("User", "user@mail.ru", "User1111");
        makeTest("", "user@mail.ru", "User1111");
    });

    describe("Ввести данные с зарегистрированной почтой", function() {

        function makeTest(user_name, e_mail, password) {
            var expected = 'Такой пользователь уже зарегистрирован!';
            it("При введении данных зарегистрированного пользователя e_mail: " + e_mail + ", результат: " + expected, function() {
                assert.equal(sign_up(user_name, e_mail, password), expected);
            });
        }
        makeTest("user", "mango@mail.ru", "User111");

    });

    describe("Ввести данные с некорректным паролем", function() {

        function makeTest(user_name, e_mail, password) {
            var expected = 'Пароль должен быть длиной не менее 6 символов и содержать символы из a-z, A-Z, 0-9';
            it("При введении данных зарегистрированного пользователя e_mail: " + e_mail + ", password: " + password + ", результат: " + expected, function() {
                assert.equal(sign_up(user_name, e_mail, password), expected);
            });
        }
        makeTest("user", "user@mail.ru", "User");

    });

    describe("Пустые поля", function() {

        function makeTest(user_name, e_mail, password) {
            var expected = 'Заполнены не все необходимые поля!';
            it("Если хотя бы одно поле будет пустым при введении данных user_name: " + user_name + ", e_mail: " + e_mail + ", password: " + password + ", результат: " + expected, function() {
                assert.equal(sign_up(user_name, e_mail, password), expected);
            });
        }
        makeTest("user", "user@mail.ru", "");
        makeTest("user", "", "User11111");
        makeTest("user", "", "");

    });

});

describe("Тестирование функции авторизации", function() {

    describe("Ввести корректные данные", function() {

        function makeTest(e_mail, password) {
            var expected = 'Пользователь авторизован!';
            it("При введении данных зарегистрированного пользователя e_mail: " + e_mail + ", password: " + password + ", результат: " + expected, function() {
                assert.equal(log_in(e_mail, password), expected);
            });
        }
        makeTest("mango@mail.ru", "mango99");
    });

    describe("Ввести некорректные данные", function() {

        function makeTest(e_mail, password) {
            var expected = 'E-mail или пароль введены неправильно!';
            it("При введении данных зарегистрированного пользователя e_mail: " + e_mail + ", password: " + password + ", результат: " + expected, function() {
                assert.equal(log_in(e_mail, password), expected);
            });
        }
        makeTest("user@mail.ru", "mango99");
        makeTest("mango@mail.ru", "User11111");
        makeTest("user@mail.ru", "User11111");

    });

    describe("Пустые поля", function() {

        function makeTest(e_mail, password) {
            var expected = 'Заполнены не все необходимые поля!';
            it("Если хотя бы одно поле будет пустым при введении данных e_mail: " + e_mail + ", password: " + password + ", результат: " + expected, function() {
                assert.equal(log_in(e_mail, password), expected);
            });
        }
        makeTest("user@mail.ru", "");
        makeTest("", "User11111");
        makeTest("", "");

    });

});

describe("Тестирование функции перевода", function() {

    describe("Ввести количество символов меньше 300", function() {

        function makeTest(words) {
            var expected = 'Перевод прошел успешно!';
            it("При введении пользователем строкидлиной " + words.length + ": " + words + ", результат: " + expected, function() {
                assert.equal(trans(words), expected);
            });
        }
        str = [];
        for (var i = 0; i < 8; i++) {
            str.push('解');
        }
        makeTest(str);
    });

    describe("Ввести количество символов от 300 и выше", function() {

        function makeTest(words) {
            var expected = 'Количество символов не должно превышать 300 включительно!';
            it("При введении пользователем строки длиной " + words.length + ": " + words + ", результат: " + expected, function() {
                assert.equal(trans(words), expected);
            });
        }
        var str = [];
        for (var i = 0; i < 300; i++) {
            str.push('解');
        }
        makeTest(str);

        for (var i = 0; i < 5; i++) {
            str.push('解');
        }
        makeTest(str);

    });

});