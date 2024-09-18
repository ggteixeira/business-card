#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import yargs from "yargs";

const { argv } = yargs;

const lang = argv.lang || "en";

const options = {
  padding: 1,
  margin: 1,
  title: "λ",
  titleAlignment: "center",
  borderStyle: "bold",
  borderColor: "#6495ED",
};

const art = `
            _______  __   __  ___  
           |       ||  | |  ||   | 
           |    ___||  | |  ||   | 
           |   | __ |  |_|  ||   | 
           |   ||  ||       ||   | 
           |   |_| ||       ||   | 
           |_______||_______||___| 
`;

const data = {
  logo: chalk.blueBright(art),

  name: chalk.white("     Gui Teixeira ·"),
  work: chalk.white("Software Developer"),
  mail: {
    en: chalk.hex(options.borderColor)("hello@guiteixeira.dev"),
    br: chalk.hex(options.borderColor)("ola@guiteixeira.dev"),
  },
  github: chalk.hex(options.borderColor)("https://github.com/ggteixeira"),
  linkedin: chalk.hex(options.borderColor)(
    "https://www.linkedin.com/in/guiatf/",
  ),
  blog: {
    br: chalk.hex(options.borderColor)("https://dev.to/guiteixeira"),
    en: chalk.hex(options.borderColor)("https://dev.to/guiteixeira"),
  },
  website: {
    br: chalk.hex(options.borderColor)("https://guiteixeira.dev"),
    en: chalk.hex(options.borderColor)("https://guiteixeira.dev"),
  },
};

const defaultLabel = {
  work: chalk.white.bold("     Work:"),
  website: chalk.white.bold("  Website:"),
  github: chalk.white.bold("   GitHub:"),
  linkedin: chalk.white.bold(" LinkedIn:"),
  blog: chalk.white.bold("     Blog:"),
};

const label = {
  en: { ...defaultLabel },
  br: {
    ...defaultLabel,
    work: chalk.white.bold(" Trabalho:"),
    blog: chalk.white.bold("   Blog:"),
    website: chalk.white.bold("     Site:"),
  },
};

const output = `${data.logo}

${data.name} ${data.mail[lang]}

${label[lang].work}  ${data.work}
            ${chalk.hex(options.borderColor)("")}
${label[lang].website}  ${data.website[lang]}
${label[lang].github}  ${data.github}
${label[lang].linkedin}  ${data.linkedin}
${label[lang].blog}  ${data.blog[lang]}`;

console.clear();
console.log(chalk(boxen(output, options)));
