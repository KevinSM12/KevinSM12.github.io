// CopyRight 2025 Kevin SM
#include<iostream>
#include"feb18functions.h"
using std::cout;
using std::endl;
#include<iomanip>
#include<cmath>
#include<cstdLib>
#include<CCtype>

void Capitalize(char sentence[]) {
  int i = 0;
  while ( sentence[i] != '\0' ) {
    sentence[i] = toupper(sentence[i]);
    while ( sentence[i] != ' ' && sentence[i] != '\0' )
      ++i;
    while ( sentence[i] != ' ')
      ++i;
  }
}

void ColumnSums(const int a[][kCols], int num_rows, int result[]) {
  for ( int i = 0; i < kCols; ++i) {
    result[i] = 0;
    for ( int j = 0; j < num_rows; ++j) {
      result[i] += a[j][i];
    }
  }
}

int LinearSearch(const int a[], int size, int search_value) {
  int pos = -1, i = 0;
  while ( i < size && pos == -1 ) {
    if ( a[i] == search_value )
      pos = i;
  ++i; 
  }
  return pos;
}

void PrintArray(const int a[][kCols], int num_rows, int field_width) {
  for ( int i = 0; i < num_rows; ++ i) {
    for ( int j = 0; j < kCols; ++j) {
      cout << setw(field_width) << a[i][j];
    }
    cout << endl;
  }
}

void PrintArray(const int a[], int) {
  for ( int i = 0; i < n; ++i) {
    cout << a[i] << " ";
  }
  cout << endl;
}

void Populate(int a[] , int size, int min, int max) {
  if( min > max ) {
    int temp = min;
    min = max;
    max = temp;
  }
  for ( int i = 0; i < size; ++i) {
    a[i] = rand() % ( max - min + 1 ) + min;   
  }
}

void InsertionSort(int a[], int size) {
  for ( int i = 1 ; i < size; ++ i) {
    int sorted = i;
    while ( sorted > 0 && a[sorted] < a[sorted - 1]) {
      int temp = a[sorted];
      a[sorted] = a[sorted - 1]
      a[sorted - 1] = temp;
      --sorted;
    }
  }
}