#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const argv = require("yargs").argv;

const lang = argv.lang || "en";

const options = {
  padding: 1,
  margin: 2,
  borderStyle: "double",
  borderColor: "#F20089",
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
  name: chalk.white(" Joselito /"),
  mail: chalk.hex("#F20089")("joselito@hey.com"),
  pronoun: {
    en: chalk.white("(he/him/his)"),
    pt: chalk.white("(ele/dele)"),
  },
  work: {
    en: chalk.white("Tech Lead @ StoneCo"),
    pt: chalk.white("Líder Técnico / Stone Pagamentos"),
  },
  twitter: chalk.hex("#F20089")("https://twitter.com/breakzplatform"),
  github: chalk.hex("#F20089")("https://github.com/breakzplatform"),
  unsplash: chalk.hex("#F20089")("https://unsplash.com/@breakzplatform"),
  picpay: {
    pt: chalk.hex("#F20089")("https://picpay.me/joselitojunior"),
    en: chalk.hex("#F20089")("https://ko-fi.com/joselito")
  },
  web: chalk.hex("#F20089")("https://joseli.to"),
  card: chalk.white("npx joselito"),
};

const defaultLabel = {
  work: chalk.white.bold("      Work:"),
  twitter: chalk.white.bold("   Twitter:"),
  github: chalk.white.bold("    GitHub:"),
  picpay: chalk.white.bold("     Ko-fi:"),
  unsplash: chalk.white.bold("  Unsplash:"),
  web: chalk.white.bold("       Web:"),
  card: chalk.white.bold("      Card:"),
};

const label = {
  en: { ...defaultLabel },
  pt: {
    ...defaultLabel,
    work: chalk.white.bold("  Trabalho:"),
    card: chalk.white.bold("    Cartão:"),
    picpay: chalk.white.bold("    PicPay:"),
  },
};

const output = `${data.logo}

${data.name} ${data.mail} ${data.pronoun[lang]}


${label[lang].work}  ${data.work[lang]}

${label[lang].web}  ${data.web}

${label[lang].twitter}  ${data.twitter}
${label[lang].github}  ${data.github}
${label[lang].unsplash}  ${data.unsplash}
${label[lang].picpay}  ${data.picpay[lang]}

${label[lang].card}  ${data.card}`;

console.clear();
console.log(chalk.magenta(boxen(output, options)));
