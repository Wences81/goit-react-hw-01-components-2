import s from './container.module.css';

export default function MainContainer({ children }) {
  return <div className={s.container}>{children}</div>
}