import Link from "next/link";

export const Nav = () => {
  return (
    <nav>
      <a href="/">CSV Data Graph</a>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/manage-data">
            <a>Manage Data</a>
          </Link>
        </li>
        <li>
          <Link href="/upload-csv">
            <a>Upload CSV</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
