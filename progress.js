const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      'β'.repeat(passedProgressBarIndex) +
      'β'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
<h2 align="center">π Hello!</h2>
<p align="center">
  <a href="https://thebidouilleur.xyz">Blog</a> β’
  <a href="https://twitter.com/thebidouilleur">Twitter</a>
</p>


- π­ Iβm currently working in [French government](https://www.gouvernement.fr/).
- π± Iβm currently learning more on Nix and better [X-as-code](https://quadralogics.com/research/XAsCode.html) practices.
- π¬ Ask me about **Containers, Kubernetes and Python**
- π« How to reach me: [@TheBidouilleur](https://twitter.com/TheBidouilleur) on Twitter

![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white) ![Terraform](https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white) ![Packer](https://img.shields.io/badge/packer-%23E7EEF0.svg?style=for-the-badge&logo=packer&logoColor=%2302A8EF) ![Ansible](https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&logoColor=white) ![NixOS](https://img.shields.io/badge/NixOS-48B9C7?style=for-the-badge&logo=NixOS&logoColor=white)

 -------

**π Latest Blog Posts**

<!-- BLOG-POST-LIST:START -->
- [Remarkable, une avancΓ©e dans les prises de notes](https://thebidouilleur.xyz/blog/remarkable)
- [NixOS, Ma nouvelle distribution](https://thebidouilleur.xyz/blog/nixos)
- [Mes dΓ©buts Γ  la gyroroue](https://thebidouilleur.xyz/blog/gyroroue)
- [Longhorn, stockage distribuΓ©](https://thebidouilleur.xyz/blog/longhorn)
- [Mes dΓ©buts avec s3](https://thebidouilleur.xyz/blog/s3contabo)
<!-- BLOG-POST-LIST:END -->

-------
### Stats

![QJoly's statistics](https://github-readme-stats.vercel.app/api?username=qjoly&count_private=true)

### Year progress

β³ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

β° Updated on ${new Date().toUTCString()}
\
`

console.log(readme)

