import hstyle from '../styles/ComponentStyles.module.css';
export default function Header({ title }) {
  return (
    <div className={hstyle.header}>
      <h1 className="title">{title}</h1>  
    </div>
  )
  
}
