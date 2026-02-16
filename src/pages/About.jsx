import React from 'react';

const About = () => {
    return (
      <div className="about">
        <h1 style={{marginLeft: '0px !important', fontSize: '48px'}}>
          Social network
        </h1>
        <p style={{fontSize: '24px'}}>
          Это приложение разработано, чтобы отточить навыки работы с React.
          Оно было написано на React + Vite, в нем реализованы кастомные хуки, навигация,
          получение данных с бекенда (в данном случае с сайта с информацией для примеров),
          пагинация, бесконечная лента и поиск
        </p>
      </div>


    );
};

export default About;