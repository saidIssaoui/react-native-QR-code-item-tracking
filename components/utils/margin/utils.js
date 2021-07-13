export const getMargin = ({
  mt1,
  mt2,
  mt3,
  mt4,
  mt5,
  mb1,
  mb2,
  mb3,
  mb4,
  mb5,
  ml1,
  ml2,
  ml3,
  ml4,
  ml5,
  mr1,
  mr2,
  mr3,
  mr4,
  mr5,
}) => {
  const m = 12;
  let marginTop;
  let marginBottom;
  let marginLeft;
  let marginRight;
  if (mt1) {
    marginTop = m * 1;
  } else if (mt2) {
    marginTop = m * 2;
  } else if (mt3) {
    marginTop = m * 3;
  } else if (mt4) {
    marginTop = m * 4;
  } else if (mt5) {
    marginTop = m * 5;
  } else if (mb1) {
    marginBottom = m * 1;
  } else if (mb2) {
    marginBottom = m * 2;
  } else if (mb3) {
    marginBottom = m * 3;
  } else if (mb4) {
    marginBottom = m * 4;
  } else if (mb5) {
    marginBottom = m * 5;
  } else if (ml1) {
    marginLeft = m * 1;
  } else if (ml2) {
    marginLeft = m * 2;
  } else if (ml3) {
    marginLeft = m * 3;
  } else if (ml4) {
    marginLeft = m * 4;
  } else if (ml5) {
    marginLeft = m * 5;
  } else if (mr1) {
    marginRight = m * 1;
  } else if (mr2) {
    marginRight = m * 2;
  } else if (mr3) {
    marginRight = m * 3;
  } else if (mr4) {
    marginRight = m * 4;
  } else if (mr5) {
    marginRight = m * 5;
  }
  return {marginTop, marginBottom, marginLeft, marginRight};
};
