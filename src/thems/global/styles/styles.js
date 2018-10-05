import { StyleSheet, Dimensions, Platform } from "react-native";
import theme from '../theme.style';


export default StyleSheet.create({
    noPadding: {
        padding: 0
    },
    padding10: {
        padding: 10
    },
    padding5: {
        padding: 5
    },
    paddingLeft10: {
        paddingLeft: 10
    },
    paddingRight10: {
        paddingRight: 10
    },
    paddingBottom10: {
        paddingBottom: 10
    },
    marginLeft10: {
        marginLeft: 10
    },
    margin20: {
        margin: 10
    },
    marginBottom20: {
        marginBottom: 20
    },
    flex: {
        flex: 1
    },
    flexRow: {
        flex: 1,
        flexDirection:  'row'
    },
    flexColumn: {
        flex: 1,
        flexDirection:  'column'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 150,
        height: 150
    },
    logoTextContainer: {
        flexDirection: 'row',
    },
    logoTextFrog:{
        color: theme.PRIMARY_COLOR,
        fontSize: theme.FONT_SIZE_EXTRA_LARGE,
    },
    logoTextProgress: {
        color: theme.WHITE_COLOR,
        fontSize: theme.FONT_SIZE_EXTRA_LARGE,
    },
    container: {
        flex: 1,
        backgroundColor: theme.SLATE_COLOR,
        paddingTop: (Platform.OS === "ios" ? 20 : 0)
    },
    footer: {
        width: Dimensions.get('window').width,
    },
    fullWidth: {
        width: Dimensions.get('window').width,
    },
    bottomContainer: {
        padding: 20,
    },
    inputStyle: {
        backgroundColor: theme.DARK_GREY_COLOR,
        color: theme.WHITE_COLOR,
        fontSize: theme.FONT_SIZE_LARGE,
        borderRadius: 5,
        textAlign: 'center',
        height: 50
    },
    blueBGStyle: {
        backgroundColor: theme.BLUE_COLOR,
        marginTop:10,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
    },
    redBGStyle: {
        backgroundColor: theme.RED_COLOR,
        marginTop:10,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
    },
    greenBGStyle: {
        backgroundColor: theme.GREEN_COLOR,
        marginTop:10,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
    },
    greyBGStyle: {
        backgroundColor: theme.MID_GREY_COLOR,
        marginTop:10,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
    },
    whiteTextStyle: {
        color: theme.WHITE_COLOR, 
        alignSelf:'center',
        fontWeight: 'bold',
        fontSize: theme.FONT_SIZE_MEDIUM,
    },
    // Tab container
    containerWhite: {
        flex: 1,
        backgroundColor: theme.WHITE_COLOR,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    loadingHorizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'transparent',
        padding: 10
    },
    tabContainer: {
      flex: 1,                            // Take up all screen
      backgroundColor: theme.PRIMARY_COLOR,         // Darker background for content area
    },
    tabContent: {
      flex: 1,                            // Take up all available space
      // justifyContent: 'center',           // Center vertically
      // alignItems: 'center',               // Center horizontally
      backgroundColor: theme.WHITE_COLOR,         // Darker background for content area
    },
    listItemDarkHeaderStyle:{
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: theme.DARK_GREY_COLOR,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    listItemStageHeaderTextStyle:{
        color: theme.WHITE_COLOR,
        fontSize: theme.FONT_SIZE_LARGE,
        fontWeight: 'bold',
        flex: 1,
        alignSelf: 'stretch',
    },
    listItemYearHeaderStyle:{
        padding: 10,
        backgroundColor: theme.LIGHT_GREY_COLOR,
        color: theme.DARK_GREY_COLOR,
        fontSize: theme.FONT_SIZE_SMALL,
        fontWeight: 'bold'
    },
    listItemTrackerStyle:{
        flex:1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: theme.WHITE_COLOR,
        // flexWrap: 'wrap'
    },
    listThreeSidedBorderStyle: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.LIGHT_GREY_COLOR,
    },
    listItemTrackerTitleStyle: {
        color: theme.DARK_GREY_COLOR,
        fontWeight: 'bold',
    },
    listItemTrackerSubTitleStyle: {
        color: theme.DARK_GREY_COLOR,
        fontWeight: 'normal',
        fontSize: theme.FONT_SIZE_TINY
    },
    listClickIcon: {
        position: 'absolute',
        right:10,
        top:10,
        fontSize: theme.FONT_SIZE_EXTRA_LARGE,
        color: theme.DARK_GREY_COLOR
    },
    headerStyle:{
        backgroundColor: theme.PRIMARY_COLOR,
        flexDirection: 'row',
        padding:10
    },
    headerTitleStyle:{
        color: '#fff', 
        fontSize: theme.FONT_SIZE_LARGE, 
        fontWeight: 'bold',
        flex:1,
        textAlign: 'center',
    },
    backButtonStyle:{
        color:theme.WHITE_COLOR,
        fontSize: theme.FONT_SIZE_EXTRA_LARGE,
        position: 'absolute',
        left:10,
        top: 10,
        zIndex: 9,
    },
    subHeaderStyle: {
        backgroundColor: theme.PRIMARY_COLOR,
        padding: 10,
    },
    cardStyle: {
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: theme.LIGHT_GREY_COLOR,
        backgroundColor: theme.WHITE_COLOR
    },
    whiteIconStyle: { 
        color: theme.WHITE_COLOR,
        fontSize: theme.FONT_SIZE_EXTRA_LARGE
    },
    greyIconStyle: { 
        color: theme.DARK_GREY_COLOR,
        fontSize: theme.FONT_SIZE_EXTRA_LARGE
    },
    bottomView:{
        width: '100%', 
        backgroundColor: theme.DARK_GREY_COLOR, 
        justifyContent: 'center', 
        alignItems: 'center',
        // minHeight: 80,
        position: 'absolute',
        bottom: 0,
        left: 0,
        flex: 1,
        flexDirection: 'row',
        padding: 10
      },
  });