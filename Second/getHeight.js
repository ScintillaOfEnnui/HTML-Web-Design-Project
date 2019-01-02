var rFhw, rA, rAw, heightInPxls, rCh, rBh, rBw, rFw, uName, rheight;
        
        function Submit(){
          rheight = document.getElementById("sbHeight").value;
          uName = document.getElementById("sbName").value;
          document.querySelector('.bg-modal').style.display = "none";
          document.getElementById("btnSolveR").innerHTML = uName;
      };
        function SolveR(){
            heightInPxls = rheight * 7;
            rCh = heightInPxls * 0.20;
            rBh = heightInPxls * 0.45;
            rFhw = heightInPxls * 0.30;
            rAh = heightInPxls * 0.05;
            rBw = rFhw * 0.80;
            rAw = rFhw * 2.2;
            rFw = rFhw * 0.30;
            document.getElementById("rcircle").style.height = (rCh+"px");
            document.getElementById("rbody").style.height = (rBh+"px");
            document.getElementById("rfeet").style.height = (rFhw+"px");
            document.getElementById("rcircle").style.width = (rCh+"px");
            document.getElementById("rbody").style.width = (rBw+"px");
            document.getElementById("rfeet").style.width = (rFw+"px");
            document.getElementById("rarms").style.height = (rAh+"px");
            document.getElementById("rarms").style.width = (rAw+"px");

        };
        var lFhw, lA, lAw, lheightInPxls, lCh, lBh, lBw,lFw;
        var lHeight = 84;

        function SolveL(){
            lheightInPxls = lHeight * 7;
            lCh = lheightInPxls * 0.20;
            lBh = lheightInPxls * 0.45;
            lFhw = lheightInPxls * 0.30;
            lAh = lheightInPxls * 0.05;
            lBw = lFhw * 0.8;
            lAw = lFhw * 2.2;
            lFw =lFhw *0.30;
            document.getElementById("lcircle").style.height = (lCh+"px");
            document.getElementById("lbody").style.height = (lBh+"px");
            document.getElementById("lfeet").style.height = (lFhw+"px");
            document.getElementById("lcircle").style.width = (lCh+"px");
            document.getElementById("lbody").style.width = (lBw+"px");
            document.getElementById("lfeet").style.width = (lFw+"px");
            document.getElementById("larms").style.height = (lAh+"px");
            document.getElementById("larms").style.width = (lAw+"px");
        };