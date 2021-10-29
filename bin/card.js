#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import yargs from "yargs";

const { argv } = yargs;

const lang = argv.lang || "en";

const options = {
  padding: 1,
  margin: 1,
  title: "joseli.to",
  titleAlignment: "center",
  borderStyle: "bold",
  borderColor: "#652585",
};

const data = {
  logo: chalk.white(`     __ _____ 
  __|  |     |
 |  |  |  |  |
 |_____|_____|
  _____ _____ 
 |   __|   __|
 |__   |   __|
 |_____|_____|`),
  name: chalk.white(" Joselito ·"),
  mail: {
    en: chalk.hex(options.borderColor)("me@joseli.to"),
    pt: chalk.hex(options.borderColor)("eu@joseli.to"),
  },
  pronoun: {
    en: chalk.white("(he/him/his)"),
    pt: chalk.white("(ele/dele)"),
  },
  work: chalk.white("Community Program Manager · Turing"),
  twitter: chalk.hex(options.borderColor)("https://twitter.com/breakzplatform"),
  github: chalk.hex(options.borderColor)("https://github.com/breakzplatform"),
  unsplash: chalk.hex(options.borderColor)("https://unsplash.com/@breakzplatform"),
  picpay: {
    pt: chalk.hex(options.borderColor)("https://picpay.me/joselitojunior"),
    en: chalk.hex(options.borderColor)("https://ko-fi.com/joselito")
  },
  web: {
    pt: chalk.hex(options.borderColor)("https://joseli.to/pt"),
    en: chalk.hex(options.borderColor)("https://joseli.to")
  },
};

const defaultLabel = {
  work: chalk.white.bold("     Work:"),
  twitter: chalk.white.bold("  Twitter:"),
  github: chalk.white.bold("   GitHub:"),
  picpay: chalk.white.bold("    Ko-fi:"),
  unsplash: chalk.white.bold(" Unsplash:"),
  web: chalk.white.bold("      Web:"),
};

const label = {
  en: { ...defaultLabel },
  pt: {
    ...defaultLabel,
    work: chalk.white.bold(" Trabalho:"),
    card: chalk.white.bold("   Cartão:"),
    picpay: chalk.white.bold("   PicPay:"),
    web: chalk.white.bold("     Site:"),
  },
};

const output = `${data.logo}


${data.name} ${data.mail[lang]} ${data.pronoun[lang]}

${label[lang].work}  ${data.work}
            ${chalk.hex(options.borderColor)("joselito@turing.com")}

${label[lang].web}  ${data.web[lang]}
${label[lang].twitter}  ${data.twitter}
${label[lang].github}  ${data.github}
${label[lang].unsplash}  ${data.unsplash}
${label[lang].picpay}  ${data.picpay[lang]}`;

console.clear();
console.log(chalk(boxen(output, options)));
