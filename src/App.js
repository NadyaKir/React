import Header from './components/Header/Header';
import Card from './components/Card/Card';

import MeinKun from './Images/meinkun.jpg';
import ShotlCat from './Images/shotl.jpg';
import BritainCat from './Images/brit.jpeg';
import BenglCat from './Images/bengl.jpg';
import { useState } from 'react';

const BASE_CATS = [
  {
    id: '1',
    title: 'Мейн-кун',
    descr:
      'Одной из самых удивительных и загадочных пород считается мейн-кун – ласковый гигант с серьезным взглядом. Этих созданий называют «комнатными рысями», что неудивительно, т.к. они одни из самых крупных домашних кошек.',
    img: MeinKun,
  },
  {
    id: '2',
    title: 'Шотландская вислоухая',
    descr:
      'Во всём мире эту породу именуют «скоттиш-фолд», но нам привычней называть этих милых кошек «шотландскими вислоухими». Их «няшная» внешность никого не оставит равнодушным – такое создание сразу хочется взять на руки и затискать.',
    img: ShotlCat,
  },
  {
    id: '3',
    title: 'Британская короткошерстные',
    descr:
      'Без таких вот «плюшевых» комочков счастья не мыслят своего существования миллионы людей во всем мире. Эти аристократичные, дружелюбные, харизматичные и весьма чистоплотные питомцы уже долгое время являются одной из самых популярных кошачьих пород на планете.',
    img: BritainCat,
  },
  {
    id: '4',
    title: 'Бенгальская кошка',
    descr:
      'Бенгальские кошки – невероятно красивые животные, которые сочетают в себе эффектную внешность диких хищников и покладистый характер домашних питомцев. Ну а главной «фишкой» этих созданий является «леопардовый окрас», за что их и зовут «домашними леопардами».',
    img: BenglCat,
  },
];

function App() {
  const [cats, setCats] = useState(BASE_CATS);

  const handleCatChange = (catId, editedTitle, editedDescr) => {
    const updatedCats = cats.map((cat) => {
      if (cat.id === catId) {
        return {
          ...cat,
          title: editedTitle,
          descr: editedDescr,
        };
      }
      return cat;
    });
    setCats(updatedCats);
  };

  return (
    <div>
      <Header />
      <div className="cards">
        {cats.map((cat) => (
          <Card
            key={cat.id}
            id={cat.id}
            title={cat.title}
            descr={cat.descr}
            img={cat.img}
            handleCatChange={handleCatChange}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
