java.js
<script type="text/javascript">
function fichierPopup () {
var confirme= confirm('Tu veut aller sur ce site pour adultes! Clique sur <ok>') ;
if (confirme) { window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ") ; }
else { alert('Non merci') ; } }

setTimeout(function() { fichierPopup() } , 10000) ;
}
</script>


<script type="text/javascript">
setTimeout(
            function(){
                document.getElementById('popup').style.display= 'block';
            }, 10000);
        
        document.getElementById('Non').addEventListener('click', function(){
            document.getElementById('popup').style.display = 'none';
        });
        document.getElementById('ModePsychédélique').addEventListener('click', function(){
            document.getElementById('popup').style.backgroundColor = 'magenta';
        });
    </script>




