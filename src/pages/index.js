import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const projects = [
  {
    name: 'Toloka for monobank',
    tags: ['WooCommerce', 'monobank', 'v0.1.0'],
    docs: '/monobank/',
    github: 'https://github.com/tolokacode/toloka-monobank',
    text: <Translate id="home.monobank.text">Покупка частинами monobank і накладений платіж з онлайн-передоплатою.</Translate>,
  },
  {
    name: 'Checkbox SDK',
    tags: ['TypeScript', 'Checkbox', 'v0.1.0'],
    docs: '/checkbox-js/',
    github: 'https://github.com/tolokacode/checkbox-js',
    text: <Translate id="home.checkbox.text">Фіскальні чеки Checkbox (ПРРО) з вашого сервера. Пакет @tolokacode/checkbox на npm.</Translate>,
  },
];

const facts = [
  {title: <Translate id="home.fact.free.title">Безкоштовно</Translate>, text: <Translate id="home.fact.free.text">Без платних версій і ліцензійних ключів.</Translate>},
  {title: <Translate id="home.fact.open.title">Відкритий код</Translate>, text: <Translate id="home.fact.open.text">Усе на GitHub. Плагіни під ліцензією GPLv2 or later, бібліотеки під MIT.</Translate>},
  {title: <Translate id="home.fact.lang.title">Дві мови</Translate>, text: <Translate id="home.fact.lang.text">Українська та англійська, в плагінах і документації.</Translate>},
];

export default function Home() {
  return (
    <Layout description={translate({id: 'home.description', message: 'Безкоштовні плагіни з відкритим кодом'})}>
      <header className={styles.hero}>
        <div className="container">
          <img className={styles.logo} src={useBaseUrl('/img/logo.svg')} alt="" />
          <h1>tolokacode</h1>
          <p className={styles.lead}>
            <Translate id="home.intro">Безкоштовні плагіни з відкритим кодом для сервісів, якими користуються магазини в Україні.</Translate>
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary" to="/monobank/"><Translate id="home.docs">Документація</Translate></Link>
            <Link className="button button--outline button--primary" href="https://github.com/tolokacode">GitHub</Link>
          </div>
        </div>
      </header>

      <main className={`container ${styles.page}`}>
        <h2><Translate id="home.projects">Проєкти</Translate></h2>
        <div className={styles.projects}>
          {projects.map((p) => (
            <div key={p.name} className={styles.card}>
              <div className={styles.tags}>
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
              <div className={styles.links}>
                <Link to={p.docs}><Translate id="home.docs">Документація</Translate></Link>
                <Link href={p.github}>GitHub</Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.facts}>
          {facts.map((f, i) => (
            <div key={i}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          <Translate id="home.toloka">Толока — коли хату будували всім селом. Помилки та ідеї — на GitHub.</Translate>
        </p>
      </main>
    </Layout>
  );
}
