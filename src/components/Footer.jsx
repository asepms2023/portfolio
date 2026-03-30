function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer>
      &copy; {year} <span>Mohamad Asep Shayfullah</span>. All rights reserved.
    </footer>
  );
}

export default Footer;