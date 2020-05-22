var web3 = new Web3(Web3.givenProvider);
var contractInstance;
var coinTossed = false;

$(document).ready(function(){
  window.ethereum.enable().then(function(accounts){
    contractInstance = new web3.eth.Contract(abi, "0x636bCf76dFD215D7D52790007F4fDEc88C182249", {from: accounts[0]});
  });

  $("#tossCoin").click(inputMoney);
  $("#update").click(showResult1);
  $("#update").click(showResult2);
  $("#update").click(showResult3);
  $("#update").click(showResult4);
  $("#update").click(showResult5);
});

function inputMoney(){
  contractInstance.methods.insertCoin().send({value: 1000000000000000})
    .on('transactionHash', function(hash){
      console.log("tx hash");
    })
    .on('confirmation', function(confirmationNumber, receipt){
        console.log("conf");
    })
    .on('receipt', function(receipt){
      console.log(receipt);
      coinTossed = true;
    })
}

function setResult(punktzahl){
  web3.eth.getAccounts().then(accountArray => {
    var account = accountArray[0];

    contractInstance.methods.setPlayerRank(punktzahl).send({from: account})
  });
}

function showResult1(){
  contractInstance.methods.getRankingOf1().call().then(function(res){
    displayInfo1(res);
  });
}

function displayInfo1(res){
  $("#no1score").text("Points: " + res["scoree"]);
  $("#no1address").text("Player Address: " + res["playerAddresss"]);
}

function showResult2(){
  contractInstance.methods.getRankingOf2().call().then(function(res){
    displayInfo2(res);
  });
}

function displayInfo2(res){
  $("#no2score").text("Points: " + res["scoree"]);
  $("#no2address").text("Player Address: " + res["playerAddresss"]);
}

function showResult3(){
  contractInstance.methods.getRankingOf3().call().then(function(res){
    displayInfo3(res);
  });
}

function displayInfo3(res){
  $("#no3score").text("Points: " + res["scoree"]);
  $("#no3address").text("Player Address: " + res["playerAddresss"]);
}

function showResult4(){
  contractInstance.methods.getRankingOf4().call().then(function(res){
    displayInfo4(res);
  });
}

function displayInfo4(res){
  $("#no4score").text("Points: " + res["scoree"]);
  $("#no4address").text("Player Address: " + res["playerAddresss"]);
}

function showResult5(){
  contractInstance.methods.getRankingOf5().call().then(function(res){
    displayInfo5(res);
  });
}

function displayInfo5(res){
  $("#no5score").text("Points: " + res["scoree"]);
  $("#no5address").text("Player Address: " + res["playerAddresss"]);
}
