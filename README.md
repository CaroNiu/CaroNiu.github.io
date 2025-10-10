<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>婴儿奶量计算器</title>
    <style>
        body {
            font-family: "Microsoft YaHei", sans-serif;
            background-color: #f8fafc;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            min-height: 100vh;
            margin: 0;
            padding: 30px;
        }

        .card {
            background: #fff;
            padding: 25px;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            width: 420px;
            margin-bottom: 25px;
        }

        h2 {
            margin-bottom: 15px;
            color: #2563eb;
            text-align: center;
        }

        label {
            font-weight: bold;
            display: block;
            text-align: left;
            margin-top: 10px;
        }

        input, button {
            width: 100%;
            padding: 10px;
            margin-top: 6px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 16px;
        }

        button {
            background-color: #2563eb;
            color: white;
            border: none;
            cursor: pointer;
            transition: 0.3s;
            margin-top: 15px;
        }

        button:hover {
            background-color: #1d4ed8;
        }

        .result {
            margin-top: 15px;
            font-size: 16px;
            background-color: #f1f5f9;
            padding: 15px;
            border-radius: 10px;
            line-height: 1.7;
        }

        .rules {
            background-color: #fff;
            padding: 20px;
            border-radius: 16px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            width: 700px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        th, td {
            border: 1px solid #e5e7eb;
            padding: 8px 10px;
            text-align: center;
        }

        th {
            background-color: #f3f4f6;
        }

        .highlight {
            background-color: #eff6ff;
        }
    </style>
</head>
<body>

<div class="card">
    <h2>婴儿奶量计算器 🍼</h2>
    <label>宝宝月龄（月）</label>
    <input type="number" id="age" placeholder="请输入月龄，例如 2" min="0" max="24">

    <label>宝宝体重（kg）</label>
    <input type="number" id="weight" placeholder="请输入体重，例如 5.5" step="0.1" min="1" max="20">

    <button onclick="calculateMilk()">计算奶量</button>

    <div id="result" class="result" style="display:none;"></div>
</div>

<div class="rules">
    <h3>📘 奶量计算规则说明</h3>
    <p style="line-height:1.6;">
        奶量根据宝宝月龄和体重综合计算，遵循国际儿科通用标准：<br>
        <strong>每日总奶量（ml） = 体重（kg） × 对应阶段的每公斤奶量（ml/kg/天）</strong><br>
        奶量随月龄增加逐渐下降，辅食添加后可进一步减少。
    </p>

    <table>
        <thead>
        <tr>
            <th>月龄阶段</th>
            <th>每日每公斤奶量 (ml/kg)</th>
            <th>建议每日喂奶次数</th>
            <th>说明</th>
        </tr>
        </thead>
        <tbody>
        <tr class="highlight">
            <td>0–1个月</td>
            <td>150–200</td>
            <td>8次</td>
            <td>新生儿期，胃容量小，喂奶频繁</td>
        </tr>
        <tr>
            <td>1–3个月</td>
            <td>120–150</td>
            <td>6次</td>
            <td>吃奶间隔可延长</td>
        </tr>
        <tr>
            <td>3–6个月</td>
            <td>100–120</td>
            <td>5次</td>
            <td>逐渐形成规律喂养</td>
        </tr>
        <tr>
            <td>6个月以上</td>
            <td>80–100</td>
            <td>4次</td>
            <td>已开始添加辅食，奶量减少</td>
        </tr>
        </tbody>
    </table>
</div>

<script>
    function calculateMilk() {
        const age = parseFloat(document.getElementById("age").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const resultDiv = document.getElementById("result");

        if (isNaN(age) || isNaN(weight) || age < 0 || weight <= 0) {
            resultDiv.style.display = "block";
            resultDiv.innerHTML = "⚠️ 请输入正确的月龄和体重。";
            return;
        }

        let dailyMin, dailyMax, times;

        if (age <= 1) { dailyMin = 150; dailyMax = 200; times = 8; }
        else if (age <= 3) { dailyMin = 120; dailyMax = 150; times = 6; }
        else if (age <= 6) { dailyMin = 100; dailyMax = 120; times = 5; }
        else { dailyMin = 80; dailyMax = 100; times = 4; }

        const totalMin = weight * dailyMin;
        const totalMax = weight * dailyMax;
        const perMin = totalMin / times;
        const perMax = totalMax / times;

        resultDiv.style.display = "block";
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
</script>

</body>
</html>
