/***********************************************
Copyright 2016 - 2016 
***********************************************/
/* v1.0.0 */

/*------------------------------------------------
Builder�̃x�[�X�N���X 
------------------------------------------------*/
  export default class Builder {
    
    /**�R���X�g���N�^**/
    constructor(options) {
      var self = this;
      this._options = options;//�����I�v�V����
      this.nodes = [];//�������i�[�t�B�[���h
      this.attributeDelimiter =" ";//�e�m�[�h�Ԃ̋�؂蕶��
    }
    getNodes(arg) {
      return this.nodes.join(arg || '\n');
    }
    addNode(node) {
      this.nodes.push(node);
    }
    /**
       getResult
       �������ʕԋp���\�b�h
       �������ʂ����b�v����Ȃǂ̉\���K�v�ȏꍇ�̓R�R�ɋL�ڋL�ڂ���
     **/
    getResult(arg) {
      return(`${this.getNodes()}`);
    }
    
    /**
       beforeCreateAttribute
       �����m�[�h�ŊeBuilder���Ăяo���O��1�񂾂����s����܂��B
       ����̑���������������Ƃ������P�[�X�ŗ��p���Ă�������
       
    **/
    beforeCreateAttribute(attributes) {}

    /**
       createAttribute_text
       �����m�[�h�ŌĂ΂�܂�
       key:������
       attribute:�m�[�h
       
    **/
    createAttribute_text(key, attribute) {}

    /**
       createAttribute_script
       Script�^�C�v�̑����m�[�h�ŌĂ΂�܂�
       attribute��Script�^�C�v�̏ꍇ�ɌĂяo����܂�
       key:������
       attribute:�m�[�h
       
    **/
    createAttribute_script(key, attribute) {}

    beforeCreateTagElement(src, isContainer,state) {}

    /**
       createTagElement_open
       �^�O�J�n�̃m�[�h�ŌĂ΂�܂�
       src:{name:�^�O���Aattributes�F�m�[�h�Ɋ܂܂�鑮���iMAP�j}
       attributes:�m�[�h�Ɋ܂܂�鑮���������Ă܂�
       isContainer:�q�v�f���܂ޏꍇ��true�ɂȂ�܂��B
       state:{depth:�C���f���g��}
       
    **/
    createTagElement_open(src, attributes, isContainer,state) {}

    /**
       createTagElement_close
       �^�O�I���̃m�[�h�ŌĂ΂�܂�
       src:{name:�^�O��}
       state:{depth:�C���f���g��}
       
    **/
    createTagElement_close(src,state) {}

    beforeCreateNodes(src,state) {}

    /**
       createTextElement
       �e�L�X�g�^�C�v�̖��[�m�[�h�ŌĂ΂�܂�
       src:{data:�e�L�X�g}
       state:{depth:�C���f���g��}
       
    **/
    createTextElement(src,state) {}

    createCommentElement(src,state) {}
    beforeCreateScriptElement(src, isContainer,state) {}
    createScriptElement_open(src, isContainer,state) {}
    createScriptElement_close(src,state) {}

    /**
       beforeCompile
       �eBuilder���Ăяo���O��1�񂾂����s����܂��B
       ����̃m�[�h������������Ƃ������P�[�X�ŗ��p���Ă�������
       
    **/
    beforeCompile(src) {}
  }