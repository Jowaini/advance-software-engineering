class OSIModel {
  constructor(massage = "") {
    this._message = massage;
  }

//! Application layer
  application(el) {
    this._message += el;
    return this;
  }

//! Presentation layer
  presentation() {
    this._message += "fD23@#$D@#D";
    return this;
  }

  //! Session Layer
  session(sourceId, destinationId) {
    this._message += sourceId + destinationId;
    return this;
  }

//! Transport Layer
  transport(sourcePort, destinationPort) {
    this._message += sourcePort + destinationPort;
    return this;
  }

//! Network Layer
  network(sourceIP, destinationIP) {
    this._message += sourceIP + destinationIP;
    return this;
  }

//! Datalink Layer
  datalink(sourceMAC, destinationMAC) {
    this._message += sourceMAC + destinationMAC;
    return this;
  }

//!  Physical Layer
  physical() {
    this._message = this._message
      .split("")
      .map(function (char) {
        return char.charCodeAt(0).toString(2);
      })
      .join(" ");
    return this;
  }
}
  //! Now Lets Test The Code

const Test = new OSIModel();
console.log(
  Test.application("test")
    .presentation()
    .session("1", "2")
    .transport("3000", "8000")
    .network("192.168.12.254", "192.168.12.252")
    .datalink("02-B0-D0-62-C2-26", "10-D0-B0-12-A2-20")
    .physical()._message
);
//! and now BooooM  Congratulations it Works
