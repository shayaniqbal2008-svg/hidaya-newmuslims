/** The tab bar is hidden wherever the lesson player runs: its footer and answer sheet sit where the bar would. */
export const navHidden = (path: string) => /^\/(lesson\/|practice\/(session|drill))/.test(path);
