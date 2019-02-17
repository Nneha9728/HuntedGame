const GameState = Object.freeze({
    BEGINNING:   Symbol("Beginning"),
    OUTSIDE:  Symbol("outside"),
    PLANT: Symbol("plant"),
    TREE: Symbol("tree"),
    PLANTED: Symbol("planted"),
    OVERTIME: Symbol("overtime"),
    ADVENTURE: Symbol("adventure"),
    CONTINUE: Symbol("continue"),
    CHECK: Symbol("check"),
    PATIENCE: Symbol("patience"),
    PRANK: Symbol("prank"),
    FOLLOW: Symbol("follow"),
    FIGHTING: Symbol("fighting"),
    AFRAID: Symbol("afraid"),
    WORK: Symbol("work")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.BEGINNING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "Here's a game. You have a plot near graveyard and you have to plant the crops near it but be careful because some plants are cursed. Ready ? yes or no?";
        switch(this.stateCur){
            case GameState.BEGINNING:
                this.stateCur = GameState.OUTSIDE;
                break;
            case GameState.OUTSIDE:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "Okay look for the area where you want to plant the crop, Try near the fence first ?";
                    this.stateCur = GameState.PLANT
                }else{
                    sReply ="Go home and watch comedy movie.";
                    this.stateCur = GameState.BEGINNING;
                }
                 break;
                 case GameState.PLANT:
                 if(sInput.toLowerCase().match("fence")){
                     sReply = "Did you see that? the plants are glowing red. Go try the tree or take a risk to plant here!"; 
                     this.stateCur = GameState.TREE
                 }else{
                     sReply = "OOps! you are cursed!!! game over, begin again!";
                     this.stateCur = GameState.BEGINNING;
                 }
                 break;
                 case GameState.TREE:
                 if(sInput.toLowerCase().match("tree")){
                     sReply = "Yeah! this tree looks normal, plant some crops here or find another place";
                     this.stateCur = GameState.PLANTED
                 }else{
                     sReply = "OOps! you are cursed!!! game over, begin again!";
                     this.stateCur = GameState.BEGINNING;
                 }
                 break;
                 case GameState.PLANTED:
                 if(sInput.toLowerCase().match("plant")){
                 sReply = "GOOD! you're done for tonight. Go home and have your dinner or want to work overtime";
                  this.stateCur = GameState.OVERTIME;
                } else {
                    sReply = "OOps! you are cursed!!! game over, begin again!";
                    this.stateCur = GameState.BEGINNING;

                }
                break;
                case GameState.OVERTIME:
                if(sInput.toLowerCase().match("overtime")){
                    sReply="want to work overtime .Is it for extra money or for adventure to work near graveyard late night";
                    this.stateCur=GameState.ADVENTURE;
                }else{
                    sReply="oops i am feeling hungry going home to take dinner";
                    this.stateCur=GameState.BEGINNING;

                }
                break;
                case GameState.ADVENTURE:
                if(sInput.toLowerCase().match("adventure")){
                    sReply="want an adventure to work late night near graveyard. But it is too horrible to work in dark and snowy night with wierd sounds. so would you continue or stop";
                    this.stateCur=GameState.CONTINUE;
                }else{
                    sReply="oops, its horrible; i dont want extra money";
                    this.stateCur=GameState.BEGINNING;
                }
                break;
                case GameState.CONTINUE:
                if(sInput.toLowerCase().match("continue")){
                    sReply="you are brave and continue your work. you heard a noise from graveyard would you go there to check or ignore ";
                    this.stateCur=GameState.CHECK;
                }else{
                    sReply="you afraid and run away";
                    this.stateCur=GameState.BEGINNING;
                }
                break;
                case GameState.CHECK:
                if(sInput.toLowerCase().match("check")){
                    sReply="you go to graveyard to check the sound. suddenly you feel that someone follow you; then you get afraid and run from there or have patience and check whose there ";
                    this.stateCur=GameState.PATIENCE;
                }else{
                    sReply="you ignore the voice and continue your work";
                    this.stateCur=GameState.CONTINUE;

                }
                break;
                case GameState.PATIENCE:
                if(sInput.toLowerCase().match("patience")){
                    sReply="you have patience and turn to check who is following you.Its a shadow of mummy; what do you think it is a ghost or some prank";
                    this.stateCur=GameState.PRANK;
                }else{
                    sReply="you get afraid and run away";
                    this.stateCur=GameState.BEGINNING;
                }
                break;
                case GameState.PRANK:
                if(sInput.toLowerCase().match("prank")){
                    sReply="when you saw shadow of mummy you think its a prank.Then you follow the shadow or ignore that and continue to work";
                    this.stateCur=GameState.FOLLOW;

                }else{
                    sReply="it can be a ghost you run away";
                    this.stateCur=GameState.BEGINNING;
                }
                break;
                case GameState.FOLLOW:
                if(sInput.toLowerCase().match("follow")){
                    sReply="you follow the shadow and reached in the center of graveyard.Suddenly you saw the mummy in front of you.you start fighting or run";
                    this.stateCur=GameState.FIGHTING;
                }else{
                    sReply="you left the graveyard and continue your work";
                    this.stateCur=GameState.CONTINUE;
                }
            
            break;
            case GameState.FIGHTING:
            if(sInput.toLowerCase().match("fighting")){
            sReply="you start fighting with mummy and then it did a horrible activity you get afraid; you afraid or run away";
            this.stateCur=GameState.AFRAID;
            }else{
                sReply="oops you run away";
                this.stateCur=GameState.BEGINNING;
            }
            break;
            case GameState.AFRAID:
            if(sInput.toLowerCase().match("afraid")){
                sReply="After that horrible activity you afraid and faint and in the morning when you awake you will be in your farm. you continue your work or left the work";
                this.stateCur=GameState.WORK;
            }else{
                sReply="you are at your home and enjoying dinner";
                this.stateCur=GameState.BEGINNING;
            }
            break;
            case GameState.WORK:
            if(sInput.toLowerCase().match("work")){
                sReply="you continue your work";
                this.stateCur=GameState.BEGINNING;
            }else{
                sReply="you left the place";
                this.stateCur=GameState.BEGINNING;
            }
            break;

        }
        return([sReply]);
            }}
