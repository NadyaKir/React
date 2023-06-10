import Header from './components/Header/Header';
import Card from './components/Card/Card';

import MeinKun from './Images/meinkun.jpg';
import ShotlCat from './Images/shotl.jpg';
import BritainCat from './Images/brit.jpeg';
import BenglCat from './Images/bengl.jpg';

function App() {
  const cats = [
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
      title: 'Британские короткошерстные',
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

  return (
    <div>
      <Header />
      <div className="cards">
        <Card title={cats[0].title} descr={cats[0].descr} img={cats[0].img} />
        <Card title={cats[1].title} descr={cats[1].descr} img={cats[1].img} />
        <Card title={cats[2].title} descr={cats[2].descr} img={cats[2].img} />
        <Card title={cats[3].title} descr={cats[3].descr} img={cats[3].img} />
      </div>
    </div>
  );
}

export default App;
