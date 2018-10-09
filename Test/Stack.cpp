#include <iostream>
#include "Stack.h"

#define say std::cout <<


template<typename E>
Stack<E>::Stack(): _count(0), topNode(NULL){
}

template<typename E>
bool Stack<E>::isEmpty(){
  return _count==0;
}

template<typename E>
void Stack<E>::push(E input){
  _count++;
  Node* newNode = new Node(input);
  newNode->lower = topNode;
  topNode = newNode;
}

template<typename E>
E Stack<E>::pop(){
  if (this->isEmpty()) {
    return NULL;
  }
  _count--;
  Node* oldNode = topNode;
  topNode = topNode->lower;
  E output = oldNode->elem;
  delete oldNode;
  return output;
}

template<typename E>
E Stack<E>::top(){
  return topNode->elem;
}

template<typename E>
Stack<E>::~Stack(){
  for (unsigned i = 0; i < _count; i++) {
    this->pop();
  }
}
