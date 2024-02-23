function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // Draw
        this.winner = "Draw";
      } else if (value <= 0) {
        // Player Lost
        this.winner = "Monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // Draw
        this.winner = "Draw";
      } else if (value <= 0) {
        // Monster Lost
        this.winner = "Player";
      }
    },
  },

  methods: {
    attackMonster() {
      this.currentRound++;
      const attack = getRandomValue(5, 12);
      this.monsterHealth -= attack;
      this.addLogMessage("Player", "attack", attack);
      this.attackPlayer();
    },
    attackPlayer() {
      const attack = getRandomValue(8, 15);
      this.playerHealth -= attack;
      this.addLogMessage("Monster", "attack", attack);
    },
    specialAttackMonster() {
      const attack = getRandomValue(10, 25);
      this.monsterHealth -= attack;
      this.addLogMessage("Player", "special-attack", attack);

      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const heal = getRandomValue(8, 20);
      if (this.playerHealth + heal > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += heal;
      }
      this.addLogMessage("Player", "heal", heal);
      this.attackPlayer();
    },
    startNewGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    surrender() {
      this.winner = "Monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
