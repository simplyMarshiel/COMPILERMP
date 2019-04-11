program factorial;

function factorial(n: integer): integer;
begin
  if n <= 1 then
    factorial = 1
  else
    factorial = n*factorial(n - 1);
end;

begin
writeln('Hello World');
writeln(factorial(5));
readln;
end.
