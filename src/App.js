import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userCars = await this.getCarName();
    const tryRaceNum = await this.getTryRaceNum();
  }

  async getCarName() {
    try {
      const carname = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      return carname;
    } catch (error) {}
  }

  async getTryRaceNum() {
    try {
      const tryRaceNum = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
      return tryRaceNum;
    } catch (error) {}
  }
}

export default App;
