
var GamifyingUX = {};

GamifyingUX.user = {};

GamifyingUX.calculateXP = function(work_yrs, edu_yrs) {
  const work = 1000;
  const edu = 500;
  return ((work * work_yrs) + (edu * edu_yrs));
};

GamifyingUX.getLevel = function(xp){
  var level;
  if (xp >= 0 && xp <= 1000){
    level = "Intern";
  } else if (xp > 1000 && xp <=3000){
    level = "Junior";
  } else if (xp > 3000 && xp <= 5000){
    level = "Mid-Level";
  } else if (xp > 5000 && xp <= 10000){
    level = "Senior";
  } else if (xp > 10000){
    level = "Expert";
  }
  return level;
};

GamifyingUX.nextLevel = function(xp){
  var nextlevel = {};
  if (xp >= 0 && xp <= 1000){
    nextlevel.ptsneeded = (1000 - xp);
    nextlevel.title = "Junior";
  } else if (xp > 1000 && xp <=3000){
    nextlevel.ptsneeded = (3000 - xp);
    nextlevel.title = "Mid-Level";
  } else if (xp > 3000 && xp <= 5000){
    nextlevel.ptsneeded = (5000 - xp);
    nextlevel.title = "Senior";
  } else if (xp > 5000 && xp <= 10000){
    nextlevel.ptsneeded = (10000 - xp);
    nextlevel.title = "Expert";
  } else if (xp > 10000 && xp <= 1000000){
    nextlevel.ptsneeded = (1000000 - xp);
    nextlevel.title = "Grand Master";
  }
  return nextlevel;
};