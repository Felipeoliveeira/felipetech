import Head from 'next/head'

function funcao(){

  const styles = {
    container: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
      margin: 0,
      padding: 0,
    },
    header: {
      backgroundColor: '#2c3e50',
      color: '#fff',
      padding: '1rem 2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      transition: 'opacity 0.3s',
    },
    hero: {
      backgroundColor: '#3498db',
      color: '#fff',
      padding: '4rem 2rem',
      textAlign: 'center',
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    heroTitle: {
      fontSize: '3rem',
      marginBottom: '1rem',
      fontWeight: '700',
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      opacity: 0.9,
    },
    section: {
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      marginBottom: '2rem',
      color: '#2c3e50',
      textAlign: 'center',
    },
    sectionContent: {
      fontSize: '1.1rem',
      marginBottom: '1.5rem',
      color: '#555',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '2rem',
    },
    card: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    cardTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#2c3e50',
    },
    footer: {
      backgroundColor: '#2c3e50',
      color: '#fff',
      padding: '2rem',
      textAlign: 'center',
      marginTop: '4rem',
    },
  }

  return (
    <>
      <Head>
        <title>Felipe Tech Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <nav style={styles.nav}>
            <div style={styles.logo}>Felipe Tech Studio</div>
            <ul style={styles.navLinks}>
              <li><a href="#home" style={styles.navLink}>Home</a></li>
              <li><a href="#sobre" style={styles.navLink}>Sobre</a></li>
              <li><a href="#servicos" style={styles.navLink}>Serviços</a></li>
              <li><a href="#contato" style={styles.navLink}>Contato</a></li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="home" style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Bem-vindo ao Felipe Tech Studio</h1>
            <p style={styles.heroSubtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" style={styles.section}>
          <h2 style={styles.sectionTitle}>Sobre Nós</h2>
          <p style={styles.sectionContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p style={styles.sectionContent}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </section>

        {/* Serviços Section */}
        <section id="servicos" style={{...styles.section, backgroundColor: '#f8f9fa'}}>
          <h2 style={styles.sectionTitle}>Nossos Serviços</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Desenvolvimento Web</h3>
              <p style={styles.sectionContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Design UI/UX</h3>
              <p style={styles.sectionContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Consultoria</h3>
              <p style={styles.sectionContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" style={styles.section}>
          <h2 style={styles.sectionTitle}>Entre em Contato</h2>
          <p style={styles.sectionContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p style={styles.sectionContent}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <p>&copy; 2026 Felipe Tech Studio. Todos os direitos reservados.</p>
          <p style={{marginTop: '0.5rem', opacity: 0.8}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </footer>
      </div>
    </>
  )

}
export default funcao