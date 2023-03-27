import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        padding: 10,
        flexDirection:'row',
        backgroundColor: 'orange',
        

    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 50,

    },
    inner:{
        flex:1,
        justifyContent: 'center',
        padding: 10,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    info:{
        flexDirection: 'row',
        flex:1


    },
    year:{
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 12,
        color: 'aqua',
        
    },
    soldout:{
        borderWidth:1,
        borderColor:'black',
        borderRadius:20,
        padding:5,

    },
    soldoutText:{
        color:'black',

    },
    contentcontainer:{
        flexDirection:'row',
    }

})