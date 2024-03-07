import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://github.com/hamed-JG">Hamed Jahan</a> | React.js App
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by ❤</p>
      </footer>
    </>
  );
}

export default Layout;
