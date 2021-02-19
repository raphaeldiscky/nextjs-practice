import headerStyles from '../styles/Header.module.css'

const Header = () => {
  const x = 1
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'red' : 'black'};
          }
        `}
      </style>
      <p className={headerStyles.description}>
        Keep up to date with the latest web dev news
      </p>
    </div>
  )
}

export default Header
