export const ramdomText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aut autem eius natus quibusdam dolorum labore eum consequuntur fugit quos hic impedit    assumenda a eligendi, quis voluptates! Quis, placeat animi!';

export const NAME_LASTNAME = 'Władysław Januszewski';

export const generateRandomIndex = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
