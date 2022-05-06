/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Image src="/logo.png" alt="UAlberta Taekwondo Club" sx={{ height: "50px" }} />
    </Link>
  );
}
