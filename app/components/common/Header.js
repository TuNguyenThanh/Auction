import React from 'react';
import { Text, View, Platform, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = (props) => (
  <View
    style={[styles.container, props.style, { backgroundColor: props.bgColor,
      borderBottomWidth: props.isHidenBottom ? 0 : StyleSheet.hairlineWidth
    }]}
  >
    <View style={styles.content}>
      <TouchableOpacity style={styles.leftHeader} onPress={props.onItemLeftPress}>
        {
          props.leftHeaderButtonIcon &&
          <Image
            style={styles.leftHeaderButtonImage}
            source={props.leftHeaderButtonIcon}
            resizeMode="contain"
          />
        }
        {
          props.titleItemLeft &&
          <Text style={[styles.leftHeaderText, { color: props.itemLeftColor }]}>
            {props.titleItemLeft}
          </Text>
        }
      </TouchableOpacity>
      <View style={styles.titleHeader}>
        {
          props.imageTitle &&
          <Image
            style={styles.titleHeaderImage}
            resizeMode="contain"
            source={props.imageTitle}
          />
        }
        {
          !props.imageTitle &&
          <Text style={[styles.titleText, { color: props.titleColor }]}>
            {props.title}
          </Text>
        }
      </View>

      <TouchableOpacity style={styles.rightHeader} onPress={props.onItemRightPress}>
        {
          props.titleItemRight &&
          <Text style={[styles.rightHeaderText, { color: props.itemRightColor }]}>
            {props.titleItemRight}
          </Text>
        }
        {
          props.rightHeaderButtonIcon &&
          <Image
            style={styles.rightHeaderButtonImage}
            source={props.rightHeaderButtonIcon}
            resizeMode="contain"
          />
        }
      </TouchableOpacity>
    </View>
  </View>
);

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  titleItemLeft: React.PropTypes.string,
  titleItemRight: React.PropTypes.string,
  bgColor: React.PropTypes.string,
  itemLeftColor: React.PropTypes.string,
  titleColor: React.PropTypes.string,
  itemRightColor: React.PropTypes.string,
  isHidenBottom: React.PropTypes.bool,
  onItemLeftPress: React.PropTypes.func,
  onItemRightPress: React.PropTypes.func,
  style: React.PropTypes.object,
};

Header.defaultProps = {
  bgColor: '#F8F8F8',
  itemLeftColor: null,
  titleColor: null,
  itemRightColor: null,
  isHidenBottom: true,
  style: null,
};

const styles = {
  container: {
    ...Platform.select({
      android: {
        height: 44
      },
      ios: {
        height: 64
      }
    }),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    borderBottomColor: '#000',
  },

  content: {
    height: 44,
    flexDirection: 'row',
    ...Platform.select({
      android: {
        marginTop: 0
      },
      ios: {
        marginTop: 20
      }
    })
  },

  titleHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  titleText: {
    fontSize: 27
  },

  leftHeader: {
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  leftHeaderText: {
    fontSize: 16
  },

  rightHeader: {
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  rightHeaderText: {
    fontSize: 16
  },

  leftHeaderButtonImage: {
    width: 25,
    height: 25,
    marginRight: 8
  },

  titleHeaderImage: {
    width: 100,
    height: 40
  },

  rightHeaderButtonImage: {
    width: 25,
    height: 25,
    marginLeft: 8
  },
};

export { Header };
