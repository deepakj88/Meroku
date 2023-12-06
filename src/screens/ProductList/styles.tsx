import {StyleSheet, ViewStyle, TextStyle} from 'react-native'
import {BaseStyle} from '../../types/types'

interface ListContainerStlye extends BaseStyle {
    listContainer: ViewStyle
}

export default StyleSheet.create<ListContainerStlye>({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#eff00"
    },
    listContainer: {
        flex: 1
    }
})