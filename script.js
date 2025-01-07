function addRecommendation() {
    // 新しい推薦コメントを取得
    let recommendation = document.getElementById("new_recommendation");
  
    // コメントが空でない場合のみ処理を実行
    if (recommendation.value != null && recommendation.value.trim() !== "") {
      console.log("New recommendation added");
  
      // 推薦コメントの新しい要素を作成
      var element = document.createElement("div");
      element.setAttribute("class", "recommendation");
      element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";
  
      // 作成した要素を推薦リストに追加
      document.getElementById("all_recommendations").appendChild(element);
  
      // ポップアップを表示
      showPopup(true);
  
      // テキストエリアをリセット
      recommendation.value = "";
    }
  }
  
  function showPopup(isVisible) {
    // ポップアップの表示・非表示を切り替える
    const popup = document.getElementById("popup");
    popup.style.visibility = isVisible ? "visible" : "hidden";
  }
  