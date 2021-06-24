import React from 'react';
import './style.scss';

function About() {
  return (
    <div className="page-container about">
      <h1>Про перукарню</h1>
      <div className="description-box">
        <div className="description">
          <p>
            <strong>Вусатий барбер</strong> поєднав у собі старовинні традиції з технологіями, кінематографічне
            освітлення для якісної геометрії в стрижках і класичні техніки з мистецтвом скульптури чоловічої стрижки,
            тільки так можна розкрити і створити індивідуальний, впевнений образ.
          </p>
          <p>
            Наша <strong>чоловіча перукарня</strong> - перша, хто наважилася порушити всі стереотипи, ми симбіоз
            Барбера, скульпторів і класиків - які прагнуть досконалості. Щотижня проводимо зустрічі та майстер-класи в{' '}
            <strong>Тернополі та Україні</strong>, ділимося секретами і тонкощами правильного гоління в домашніх умовах
            небезпечною бритвою, ритуалах королівського гоління. Практичні поради про догляд за бородою і вусами, та
            правильному укладанні волосся. Ми хочемо допомогти справжнім чоловікам бути ще більш незалежними і
            впевненими в собі. Вусатий барбер - чоловічий клуб в якому ви не тільки станете краще, але й будете озброєні
            досвідом наших предків. Вусатий барбер - має головну особливість, це перший <strong>барбершоп</strong> в
            Україні, відкритий вусатими майстрами.
          </p>
        </div>
        <ul className="icons">
          <li>
            <div className="icon">
              <object type="image/svg+xml" data="https://frisor.ua/images/utp/utp-1.svg">
                <img className="lazyload" data-src="https://frisor.ua/images/utp/brand.png" alt="Бренд лідер" />
              </object>
            </div>
            <p>Бренд лідер</p>
          </li>
          <li>
            <div className="icon">
              <object type="image/svg+xml" data="https://frisor.ua/images/utp/utp-2.svg">
                <img
                  className="lazyload"
                  data-src="https://frisor.ua/images/utp/clients.png"
                  alt="Задоволені клієнти"
                />
              </object>
            </div>
            <p>600 задоволених клієнтів кожен день</p>
          </li>
          <li>
            <div className="icon">
              <object type="image/svg+xml" data="https://frisor.ua/images/utp/utp-3.svg">
                <img
                  className="lazyload"
                  data-src="https://frisor.ua/images/utp/gentelmen.png"
                  alt="Підтримуємо чоловічі традиції"
                />
              </object>
            </div>
            <p>Підтримуємо чоловічі традиції</p>
          </li>
          <li>
            <div className="icon">
              <object type="image/svg+xml" data="https://frisor.ua/images/utp/utp-5.svg">
                <img className="lazyload" data-src="https://frisor.ua/images/utp/peace.png" alt="Любимо світ" />
              </object>
            </div>
            <p>Любимо світ :)</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
