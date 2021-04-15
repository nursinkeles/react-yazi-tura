import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      count: 0,
      yaziSayisi:0,
      turaSayisi:0,
    };
  }
  yaziTura = () => {
    let randomNum = Math.random() * 10;
    if (randomNum < 5) {
      this.setState({ flipping: true });
      console.log("yazi atıldı");
      this.setState({ side: "tura" });
      this.setState({ yaziSayisi: this.state.turaSayisi+1});

    } else if (randomNum > 5) {
      this.setState({ flipping: false });
      console.log("tura atıldı");
      this.setState({ side: "yazı" });
      this.setState({ turaSayisi: this.state.yaziSayisi+1});

    }
  };
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    this.yaziTura();
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.count} </strong>
          atıştan
          <strong> {this.state.turaSayisi} </strong>ü tura
          <strong> {this.state.yaziSayisi} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
