#pragma once

template<typename Val, typename Key>
class AVLTree{
  public:
    AVLTree();
    AVLTree();
    void insert(Val,Key);
    Val get(Key) const;
    void remove(Key);
    bool isEmpty();
  private:
    void calculateBalance(*node);
    void shift(*node);


  private:
    struct node{
      Val _value;
      Key _key;
      int _balance = 0;
      node* parent;
      node* left = NULL;
      node* right = NULL;
    }

    int count;
    node* _root;

}
