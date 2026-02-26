function calculateMilk() {
    const age = parseFloat(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const resultDiv = document.getElementById("result");

    if (Number.isNaN(age) || Number.isNaN(weight) || age < 0 || weight <= 0) {
        resultDiv.classList.remove("tool-result-hidden");
        resultDiv.innerHTML = "⚠️ 请输入正确的月龄和体重。";
        return;
    }

    let dailyMin;
    let dailyMax;
    let times;

    if (age <= 1) {
        dailyMin = 150;
        dailyMax = 200;
        times = 8;
    } else if (age <= 3) {
        dailyMin = 120;
        dailyMax = 150;
        times = 6;
    } else if (age <= 6) {
        dailyMin = 100;
        dailyMax = 120;
        times = 5;
    } else {
        dailyMin = 80;
        dailyMax = 100;
        times = 4;
    }

    const totalMin = weight * dailyMin;
    const totalMax = weight * dailyMax;
    const perMin = totalMin / times;
    const perMax = totalMax / times;

    resultDiv.classList.remove("tool-result-hidden");
    resultDiv.innerHTML = `
        <strong>计算结果：</strong><br>
        👶 宝宝月龄：${age} 个月<br>
        ⚖️ 宝宝体重：${weight.toFixed(1)} kg<br><br>
        📅 <strong>每日奶量计算：</strong><br>
        = ${weight.toFixed(1)} × ${dailyMin} ~ ${dailyMax}<br>
        = <strong>${totalMin.toFixed(0)} ~ ${totalMax.toFixed(0)} ml</strong><br><br>
        🍼 <strong>每次奶量计算：</strong><br>
        = (${totalMin.toFixed(0)} ~ ${totalMax.toFixed(0)}) ÷ ${times}<br>
        = <strong>${perMin.toFixed(0)} ~ ${perMax.toFixed(0)} ml</strong><br><br>
        ⏱️ 建议每日喂奶次数：<strong>${times} 次</strong><br><br>
        ✅ 奶量仅供参考，请结合宝宝食欲、吐奶情况和体重增长进行微调。
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-button");
    if (calculateButton) {
        calculateButton.addEventListener("click", calculateMilk);
    }
});
