import React, {PureComponent} from 'react';

import SelectLanguageComponent from  './components/selectLanguage.component';

import LocalizationService from '../../services/localization.service';


class FirstRunContainer extends PureComponent {

  constructor(props) {
    super(props);
  }

  _languageSelected(langCode) {
	  LocalizationService.setLocale(langCode)
  }

  render() {
    return (
	    <SelectLanguageComponent
	      select={this._languageSelected}/>
    );
  }
}

FirstRunContainer.propTypes = {

};

export default FirstRunContainer;