<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Цифровий Готель "Університет"</title>

    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f2f2f2;
        }

        header {
            background: #2c2f36;
            color: white;
            padding: 20px;
            text-align: center;
        }

        nav a {
            color: white;
            margin: 0 15px;
            text-decoration: none;
            font-weight: bold;
        }

        .hero {
            background: url("https://images.unsplash.com/photo-1566073771259-6a8506099945") center/cover no-repeat;
            color: white;
            padding: 120px 20px;
            text-align: center;
        }

        .hero h1 {
            font-size: 42px;
            margin-bottom: 10px;
        }

        section {
            padding: 50px 20px;
            text-align: center;
        }

        .rooms {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .room {
            background: white;
            margin: 15px;
            width: 300px;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 12px rgba(0,0,0,0.1);
        }

        .room img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .room-content {
            padding: 15px;
        }

        .price {
            font-size: 22px;
            font-weight: bold;
            margin: 10px 0;
        }

        .btn {
            background: #2b6cb0;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
        }

        .btn:hover {
            background: #1e4e82;
        }

        footer {
            background: #2c2f36;
            color: white;
            padding: 20px;
        }
    </style>
</head>
<body>

<header>
    <h2>Цифровий Готель "Університет"</h2>
    <nav>
        <a href="#rooms">Номери</a>
        <a href="#about">Про нас</a>
        <a href="#contact">Контакти</a>
    </nav>
</header>

<section class="hero">
    <h1>Ласкаво просимо до Цифрового Готелю</h1>
    <p>Комфортний відпочинок у самому серці міста</p>
</section>

<section id="rooms">
    <h2>Наші номери</h2>

    <div class="rooms">

        <div class="room">
            <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32">
            <div class="room-content">
                <h3>Стандарт</h3>
                <p>Затишний номер для 2 осіб</p>
                <div class="price">1200 грн / ніч</div>
                <button class="btn">Забронювати</button>
            </div>
        </div>

        <div class="room">
            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427">
            <div class="room-content">
                <h3>Напівлюкс</h3>
                <p>Більший номер з покращеним комфортом</p>
                <div class="price">1800 грн / ніч</div>
                <button class="btn">Забронювати</button>
            </div>
        </div>

        <div class="room">
            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd">
            <div class="room-content">
                <h3>Люкс</h3>
                <p>Просторий номер преміум класу</p>
                <div class="price">2500 грн / ніч</div>
                <button class="btn">Забронювати</button>
            </div>
        </div>

    </div>
</section>

<section id="about">
    <h2>Про готель</h2>
    <p>
        Цифровий Готель — сучасний готель з високим рівнем сервісу,
        затишними номерами та вигідним розташуванням у центрі міста.
    </p>
</section>

<section id="contact">
    <h2>Контакти</h2>
    <p>Телефон: +38 000 000 00 00</p>
    <p>Email: info@digital-hotel.com</p>
</section>

<footer>
    <p>© 2026 Цифровий Готель</p>
</footer>

</body>
</html>
