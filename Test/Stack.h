#pragma once

template<class E>
class Stack{
  public:
    Stack();
    ~Stack();
    bool isEmpty();
    E top();
    void push(E);
    E pop();
  private:

    struct Node{
      Node(E input) : elem(input)
      {
      }
      E elem;
      Node* lower;
    };
    Node* topNode;
    int _count;
};
