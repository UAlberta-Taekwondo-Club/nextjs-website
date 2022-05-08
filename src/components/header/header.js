/** @jsx jsx */
import Logo from 'components/logo';
import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Container, Flex, jsx, Link } from 'theme-ui';
import menuItems from './header.data';
import MobileDrawer from './mobileDrawer';
import { scrollOptions } from 'components/scroll-link';
import { useRouter } from 'next/router';

export default function Header({ className }) {
  const router = useRouter();
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <ScrollLink
                sx={styles.nav.navLink}
                to={path}
                key={i}
                onClick={() => setTimeout(() => router.replace(`#${path}`, undefined, { shallow: true }), scrollOptions.duration)}
                {...scrollOptions}
              >
                {label}
              </ScrollLink>
            ))}
          </Flex>


          <Link
            ml={2}
            sx={styles.headerBtn}
            variant="buttons.primary"
            onClick={() => {
              scroller.scrollTo('join-us', scrollOptions)
              setTimeout(() => router.replace(`#join-us`, undefined, { shallow: true }), scrollOptions.duration)
            }}
          >
            Join us
          </Link>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    fontSize: '16px',
    fontWeight: 700,
    backgroundColor: '#FCF2E8',
    display: ['none', null, null, null, 'inline-block'],
  },
  header: {
    color: 'text_white',
    fontWeight: 'normal',
    py: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    '&.sticky': {
      backgroundColor: 'background',
      color: 'text',
      py: '10px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1430px',
    '@media(max-width:1440px)': {
      maxWidth: '1230px',
    },
    '@media screen and (max-width: 991px)': {
      justifyContent: 'space-between',
    },
  },
  nav: {
    mx: 'auto',
    '@media screen and (max-width: 991px)': {
      display: 'none',
    },
    navLink: {
      fontSize: '16px',
      color: '#02073E',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      mr: '48px',
      transition: '500ms',
      ':last-child': {
        mr: '0',
      },
      '&:hover, &.active': {
        color: 'primary',
      },
    },
  },
};
