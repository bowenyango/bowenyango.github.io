This repo is used to host blogs.

## GitHub Pages Deployment

The site is deployed automatically to **GitHub Pages** on every push to `main` (and via manual workflow dispatch). The workflow lives in `.github/workflows/pages-deploy.yml` and publishes the pre-built static files in the `docs/` directory.

### Custom Domain — codewisdom.io

A `docs/CNAME` file points the site to `codewisdom.io`. Configure the following DNS records at your registrar:

| Type  | Host | Value |
|-------|------|-------|
| A     | @    | 185.199.108.153 |
| A     | @    | 185.199.109.153 |
| A     | @    | 185.199.110.153 |
| A     | @    | 185.199.111.153 |
| AAAA  | @    | 2606:50c0:8000::153 |
| AAAA  | @    | 2606:50c0:8001::153 |
| AAAA  | @    | 2606:50c0:8002::153 |
| AAAA  | @    | 2606:50c0:8003::153 |
| CNAME | www  | bowenyango.github.io |

After DNS propagates, enable **Enforce HTTPS** in the repository's Pages settings.
