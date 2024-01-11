import React, { useState, useEffect } from 'react';
import { CircleLoader } from 'react-spinners';

// HOC для управления задержкой
const withLoadingDelay = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Имитация задержки в 2 секунды (2000 миллисекунд)
      const delay = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      // Очистка таймера при размонтировании компонента
      return () => clearTimeout(delay);
    }, []);

    // Если загрузка не завершена, отображаем спиннер
    if (isLoading) {
      return (
        <div>
          <CircleLoader
            data-testid="cardSpinner"
            size={60}
            color={'#e9967a'}
            loading={true}
          />
        </div>
      );
    }

    // Если загрузка завершена, отображаем обернутый компонент
    return <WrappedComponent {...props} />;
  };
};

export default withLoadingDelay;
